export const DEFAULT_CANVAS_WIDTH = 1000;
export const DEFAULT_CANVAS_HEIGHT = 1000;

export const ARROW_LENGTH = 24;
export const ARROW_FEATHER_SIZE = 8;
export const ARROW_PADDING = 18;

export const MARGIN = {
  top: ARROW_LENGTH + ARROW_PADDING,
  bottom: ARROW_LENGTH + ARROW_PADDING,
  right: ARROW_LENGTH + ARROW_PADDING,
  left: ARROW_LENGTH + ARROW_PADDING,
};

// should be same as --track-width, --track-height, etc in src/style/index.css
export const TRACK_WIDTH = 400;
export const TRACK_HEIGHT = 5;
export const THUMB_HEIGHT = 20;
export const THUMB_WIDTH = 20;

export const DOMAIN = [-1.0, 1.0];
export const AXES_DOMAIN = [-1.0, 1.0];

export const ORIGIN = {
  x: MARGIN.left + DEFAULT_CANVAS_WIDTH / 2,
  y: MARGIN.top + DEFAULT_CANVAS_HEIGHT / 2,
};

export const VIEWBOX = [
  0,
  0,
  MARGIN.left + DEFAULT_CANVAS_WIDTH + MARGIN.right,
  MARGIN.top + DEFAULT_CANVAS_HEIGHT + MARGIN.bottom,
];

export const BASE_OPACITY = 0.5;
export const OPACITY_K = 1;
export const MIN_OPACITY = 0.1;
export const MAX_OPACITY = 0.5;
export const OPACITY_RANGE = MAX_OPACITY - MIN_OPACITY;
