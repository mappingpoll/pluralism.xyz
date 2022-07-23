import { getCachedValue, scalingFns, makeDraggable, makePersistFn } from "../helpers.js";

const { yRange } = window;
const domain = yRange ? yRange[1] - yRange[0] : null;

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

  handle.style.top = `${r}px`;

  const n = normalize(r);

  showValue(n);
};

const ondrop = () => persist();

makeDraggable(handle, ondrag, ondrop);

let value = getCachedValue() ?? 0.5;

handle.style.top = `${denormalize(value)}px`;
window.addEventListener("resize", () => {
  const value = getCachedValue() ?? 0.5;
  handle.style.top = `${denormalize(value)}px`;
});

handle.style.left = "50%";

showValue(value);

if (valueInput) {
  valueInput.addEventListener("change", event => {
    const v = event.target.value;
    handle.style.top = `${denormalize(v / domain)}px`;
    persist();
  });
}
