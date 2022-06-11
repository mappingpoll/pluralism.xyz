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

const cachedValue = getCachedValue();
if (cachedValue) {
  pCodeInput.value = cachedValue;
}
const postalRE = /^([A-Z]\d){3}$/;

pCodeInput.addEventListener(
  "input",
  debounceFn(() => tryPersist(), 500)
);

function tryPersist() {
  const pCode = pCodeInput.value;
  if (!postalRE.test(pCode)) return;

  setCachedValue(pCode);
}

function getMap(pCode) {
  if (!postalRE.test(pCode)) return null;
}
