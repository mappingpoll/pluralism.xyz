import { getCachedValue, setCachedValue } from "../helpers.js";

function debounceFn(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(args);
    }, delay);
  };
}

const pCodeInput = document.querySelector("#pcode");
const outsideCheckbox = document.querySelector("#outside");

let [pcode, isOutside] = getCachedValue() ?? [null, false];

outsideCheckbox.value = isOutside;

const postalRE = /^([A-Z]\d){3}$/;

pCodeInput.addEventListener(
  "input",
  debounceFn(() => tryPersist(), 500)
);
outsideCheckbox.addEventListener("change", event => {
  if (event.target.checked) {
    pCodeInput.value = "";
  }
  isOutside = event.target.checked;
  tryPersist();
});

function persist() {
  const pCode = pCodeInput.value;
  const isOutside = outsideCheckbox.checked;
  setCachedValue([pCode, isOutside]);
}

function tryPersist() {
  const pCode = pCodeInput.value;
  if (pCode && !outsideCheckbox.checked && !postalRE.test(pCode)) return;

  persist();
}

function getMap(pCode) {
  if (!postalRE.test(pCode)) return null;
}

pCodeInput.value = pcode;
