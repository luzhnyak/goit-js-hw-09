!function(){var t,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function(n){console.log("Start interval"),e.disabled=!0,o.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),o.addEventListener("click",(function(n){console.log("Stop interval"),e.disabled=!1,o.disabled=!0,clearInterval(t)})),o.disabled=!0}();
//# sourceMappingURL=01-color-switcher.bcb0aa42.js.map