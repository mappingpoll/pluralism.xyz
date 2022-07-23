import { getCachedValue, getScaleFns, makeDraggable, makePersistFn } from "../helpers.js";

let value = getCachedValue() ?? 0.5;

const vSlider = document.querySelector(".vslider");
const handle = document.querySelector(".handle");

const { normalize, percentize } = getScaleFns({ element: vSlider });

const getValue = () => normalize(+handle.style.top.slice(0, -1)); // remove the '%' from the handle's top value

const persist = makePersistFn(
  () => getValue(),
  () => {}
);

const ondrag = event => {
  const y = normalize(event.clientY);
  handle.style.top = `${percentize(y)}%`;
};

const ondrop = () => persist();

makeDraggable(handle, ondrag, ondrop);

handle.style.top = `${percentize(value)}%`;
handle.style.left = "50%";
