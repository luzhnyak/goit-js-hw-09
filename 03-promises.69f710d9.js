!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("6JpON");function u(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}inputDelayEl=document.querySelector('input[name="delay"]'),inputStepEl=document.querySelector('input[name="step"]'),inputAmountEl=document.querySelector('input[name="amount"]'),btnStartEl=document.querySelector("button"),btnStartEl.addEventListener("click",(function(){delay=Number(inputDelayEl.value),step=Number(inputStepEl.value),amount=Number(inputAmountEl.value),console.log("Start create promise"),console.log("Start create promise"),console.log("Start create promise");for(var t=1;t<=amount;t+=1)u(t,delay).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),delay+=step}))}();
//# sourceMappingURL=03-promises.69f710d9.js.map