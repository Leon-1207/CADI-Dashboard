(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5],{274:function(t,o,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("207240f8",content,!0,{sourceMap:!1})},276:function(t,o,n){"use strict";n(274)},277:function(t,o,n){var r=n(30)((function(i){return i[1]}));r.push([t.i,".popup{--popup-background:#f8f8f8;--popup-border-radius:1rem;height:100vh;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100vw}.popup .grid-container{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:minmax(10vmin,auto) auto minmax(10vmin,auto);min-height:100vh;width:100vw}.popup .button,.popup .content{align-items:center;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);background-color:rgba(0,0,0,.7);display:flex;justify-content:center}.popup .content{flex-direction:column;grid-column:2/3;grid-row:2/3;width:100%}.popup .grid-container>*{grid-area:auto}.popup .button:first-child{grid-area:1/1/2/2}.popup .button:nth-child(2){grid-area:1/2/2/3}.popup .button:nth-child(3){grid-area:1/3/2/4}.popup .button:nth-child(4){grid-area:2/1/3/2}.popup .content{grid-area:2/2/3/3}.popup .button:nth-child(5){grid-area:2/3/3/4}.popup .button:nth-child(6){grid-area:3/1/4/2}.popup .button:nth-child(7){grid-area:3/2/4/3}.popup .button:nth-child(8){grid-area:3/3/4/4}.popup .popup-body{background:var(--popup-background);border-radius:var(--popup-border-radius);box-shadow:0 0 10px rgba(0,0,0,.3);max-width:90vw;width:var(--popup-target-width)}",""]),r.locals={},t.exports=r},279:function(t,o,n){"use strict";n.r(o);var r={data:function(){return{visible:!1}},methods:{openPopup:function(){this.visible=!0},closePopup:function(){this.visible=!1},test:function(){console.log("a")}}},e=(n(276),n(44)),component=Object(e.a)(r,(function(){var t=this,o=t._self._c;return t.visible?o("div",{staticClass:"popup"},[o("div",{staticClass:"grid-container"},[t._l(4,(function(n,r){return o("div",{key:r,staticClass:"button",on:{click:t.closePopup}})})),t._v(" "),o("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),t._l(4,(function(n,r){return o("div",{key:r+4,staticClass:"button",on:{click:t.closePopup}})}))],2)]):t._e()}),[],!1,null,null,null);o.default=component.exports},300:function(t,o,n){"use strict";n.r(o);var r={mounted:function(){this.$refs.popup.openPopup()}},e=n(44),component=Object(e.a)(r,(function(){var t=this._self._c;return t("popup",{ref:"popup"},[t("profile")],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Profile:n(284).default,Popup:n(279).default})}}]);