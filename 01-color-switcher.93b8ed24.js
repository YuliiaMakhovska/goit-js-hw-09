!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body");t.disabled=!1,e.addEventListener("click",(function(){d=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(function(){clearInterval(d),t.disabled=!0,e.disabled=!1}));var d=null}();
//# sourceMappingURL=01-color-switcher.93b8ed24.js.map
