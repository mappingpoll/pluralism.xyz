import { getCachedValue, scalingFns, makeDraggable, makePersistFn } from "../helpers.js";

const { __yRange } = window;
const domain = __yRange ? __yRange[1] - __yRange[0] : null;

const valueInput = document.querySelector(".value-input");
const vSlider = document.querySelector(".vslider");
const handle = document.querySelector(".handle");

const { normalize, denormalize, restrictXY } = scalingFns({ element: vSlider });

const getValue = () => normalize(+handle.style.top.slice(0, -2)); // remove the 'px' from the handle's top value

const showValue = valueInput
  ? value => {
      const p = Math.round(value * domain);
      valueInput.value = p;
    }
  : () => {};

const persist = makePersistFn(getValue, showValue);

const ondrag = event => {
  const r = restrictXY(event.clientY);

  vSlider.style.opacity = 1;
  handle.style.top = handle.nextSibling.style.top = `${r}px`;

  const n = normalize(r);

  showValue(n);
};

const ondrop = () => persist();

makeDraggable(handle, ondrag, ondrop);

let value = getCachedValue() ?? 0.5;
const touched = !!getCachedValue();

if (!touched) {
  vSlider.style.opacity = 0.5;
}

handle.style.top = handle.nextSibling.style.top = `${denormalize(value)}px`;

window.addEventListener("resize", () => {
  const value = getCachedValue() ?? 0.5;
  const top = denormalize(value) + "px";
  handle.style.top = handle.nextSibling.style.top = top;
});

showValue(value);

if (valueInput) {
  valueInput.addEventListener("change", event => {
    let v = event.target.value;

    if (isNaN(parseInt(v))) {
      v = domain / 2;
    } else if (v > __yRange[1]) {
      v = __yRange[1];
    } else if (v < __yRange[0]) {
      v = __yRange[0];
    }

    const top = denormalize(v / domain) + "px";
    vSlider.style.opacity = 1;
    handle.style.top = handle.nextSibling.style.top = top;
    persist();
  });
}
