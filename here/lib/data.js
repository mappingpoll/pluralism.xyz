"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPairToXYData = exports.comments = exports.intersectRectangles = exports.data2Rectangles = exports.Rectangle = exports.describesLineY = exports.describesLineX = exports.describesRectangle = void 0;
const data_json_1 = __importDefault(require("../assets/data.json"));
const describesRectangle = (d) => { var _a, _b; return ((_a = d.x) === null || _a === void 0 ? void 0 : _a[1]) != null && ((_b = d.y) === null || _b === void 0 ? void 0 : _b[1]) != null; };
exports.describesRectangle = describesRectangle;
const describesLineX = (d) => { var _a, _b; return ((_a = d.x) === null || _a === void 0 ? void 0 : _a[1]) != null && ((_b = d.y) === null || _b === void 0 ? void 0 : _b[1]) == null; };
exports.describesLineX = describesLineX;
const describesLineY = (d) => { var _a, _b; return ((_a = d.x) === null || _a === void 0 ? void 0 : _a[1]) == null && ((_b = d.y) === null || _b === void 0 ? void 0 : _b[1]) != null; };
exports.describesLineY = describesLineY;
function isCorners(d) {
    return d.x0 !== undefined;
}
class Rectangle {
    constructor(d, layer) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.layer = 0;
        this.isPoint = false;
        if (isCorners(d)) {
            this.x0 = d.x0;
            this.x1 = d.x1;
            this.y0 = d.y0;
            this.y1 = d.y1;
        }
        else {
            if ((0, exports.describesRectangle)(d)) {
                this.x0 = d.x[0];
                this.y0 = d.y[0];
                this.x1 = d.x[1];
                this.y1 = d.y[1];
            }
            else if ((0, exports.describesLineX)(d)) {
                this.x0 = d.x[0];
                this.y0 = ((_b = (_a = d.y) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 0) - Rectangle.MIN_LENGTH / 2;
                this.x1 = d.x[1];
                this.y1 = this.y0 + Rectangle.MIN_LENGTH;
                this.height = Rectangle.MIN_LENGTH;
            }
            else if ((0, exports.describesLineY)(d)) {
                this.x0 = ((_d = (_c = d.x) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : 0) - Rectangle.MIN_LENGTH / 2;
                this.y0 = d.y[0];
                this.x1 = this.x0 + Rectangle.MIN_LENGTH;
                this.y1 = d.y[1];
                this.width = Rectangle.MIN_LENGTH;
            }
            else {
                this.x0 = ((_f = (_e = d.x) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : 0) - Rectangle.MIN_LENGTH / 2;
                this.y0 = ((_h = (_g = d.y) === null || _g === void 0 ? void 0 : _g[0]) !== null && _h !== void 0 ? _h : 0) - Rectangle.MIN_LENGTH / 2;
                this.x1 = this.x0 + Rectangle.MIN_LENGTH;
                this.y1 = this.y0 + Rectangle.MIN_LENGTH;
                this.width = this.height = Rectangle.MIN_LENGTH;
                this.area = Rectangle.MIN_LENGTH * Rectangle.MIN_LENGTH;
                this.isPoint = true;
            }
            if (!this.isPoint) {
                this.measure();
            }
        }
        if (layer)
            this.layer = layer;
    }
    measure() {
        var _a, _b;
        this.width = (_a = this.width) !== null && _a !== void 0 ? _a : Math.abs(this.x1 - this.x0);
        this.height = (_b = this.height) !== null && _b !== void 0 ? _b : Math.abs(this.y1 - this.y0);
        this.area = this.width * this.height;
    }
    static doOverlap(a, b) {
        if (a.x0 >= b.x1 || a.x1 <= b.x0)
            return false;
        if (a.y0 >= b.y1 || a.y1 <= b.y0)
            return false;
        return true;
    }
    static intersection(a, b) {
        const xyl = {
            x0: a.x0 < b.x0 ? b.x0 : a.x0,
            y0: a.y0 < b.y0 ? b.y0 : a.y0,
            x1: a.x1 > b.x1 ? b.x1 : a.x1,
            y1: a.y1 > b.y1 ? b.y1 : a.y1,
        };
        const r = new Rectangle(xyl);
        r.layer = Math.max(a.layer, b.layer) + 1;
        r.measure();
        return r;
    }
}
exports.Rectangle = Rectangle;
Rectangle.MIN_LENGTH = 0.04;
class UserRectangle extends Rectangle {
    constructor() {
        super(...arguments);
        this.user = "";
    }
    static intersection(a, b) {
        const r = Rectangle.intersection(a, b);
        r.user = b.user;
        return r;
    }
}
function data2Rectangles(data) {
    const rectangles = [];
    for (const d of data) {
        const r = new Rectangle(d);
        r.user = d.user;
        rectangles.push(r);
    }
    return rectangles.sort((a, b) => a.area - b.area);
}
exports.data2Rectangles = data2Rectangles;
function intersectRectangles(rects) {
    const stack = [];
    for (const r of rects) {
        const ontoStack = [];
        for (const s of stack) {
            if (UserRectangle.doOverlap(r, s))
                ontoStack.push(UserRectangle.intersection(r, s));
        }
        stack.push(r, ...ontoStack);
    }
    return stack;
}
exports.intersectRectangles = intersectRectangles;
const data = data_json_1.default;
exports.comments = data.reduce((comments, d) => (d.comment ? [...comments, { user: d.user, comment: d.comment }] : comments), []);
const mapPairToXYData = ({ x, y }) => data.reduce((res, d) => [...res, { x: d.points[x], y: d.points[y], user: d.user }], []);
exports.mapPairToXYData = mapPairToXYData;
