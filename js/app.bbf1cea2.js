(function(t){function r(r){for(var e,a,s=r[0],c=r[1],u=r[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);h&&h(r);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,r=0;r<o.length;r++){for(var n=o[r],e=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(e=!1)}e&&(o.splice(r--,1),t=a(a.s=n[0]))}return t}var e={},i={app:0},o=[];function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,r,n){a.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,r){if(1&r&&(t=a(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)a.d(n,e,function(r){return t[r]}.bind(null,e));return n},a.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(r,"a",r),r},a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var u=0;u<s.length;u++)r(s[u]);var h=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,r,n){t.exports=n("cd49")},"35b1":function(t,r,n){},"3a62":function(t,r,n){},"6bff":function(t,r,n){t.exports=n.p+"img/kitten.b4490057.png"},cd49:function(t,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light",staticStyle:{"background-color":"#ffdeec"},attrs:{id:"nav"}},[e("a",{staticClass:"navbar-brand mb-0 h1",attrs:{id:"dove-brand"}},[t._v("Trap the Kitten! 🐱")]),e("a",{directives:[{name:"b-modal",rawName:"v-b-modal.restart-modal",modifiers:{"restart-modal":!0}}],staticClass:"nav-link text-secondary mr-auto",attrs:{href:"#",id:"new-game-btn"}},[t._v("New Game 🕹️")])]),e("b-modal",{attrs:{id:"win-modal","ok-variant":"ok","cancel-variant":"cancel","header-class":"modal-header-class"},on:{ok:t.handleNewGame},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("h5",[t._v("You Win!")])]},proxy:!0}])},[e("p",{staticClass:"my-4"},[t._v("Congratulations! Do you want to play again?")])]),e("b-modal",{attrs:{id:"lose-modal","ok-variant":"ok","cancel-variant":"cancel","header-class":"modal-header-class"},on:{ok:t.handleNewGame},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("h5",[t._v("You Lose!")])]},proxy:!0}])},[e("p",{staticClass:"my-4"},[t._v("Oops. Do you want to try again?")])]),e("b-modal",{attrs:{id:"restart-modal","ok-variant":"ok","cancel-variant":"cancel","header-class":"modal-header-class"},on:{ok:t.handleNewGame},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("h5",[t._v("Restart")])]},proxy:!0}])},[e("p",{staticClass:"my-4"},[t._v("Do you want to start over?")])]),e("div",{style:t.getMainContainerStyle()},[e("img",{attrs:{src:n("6bff"),alt:"kitten",id:"kitten-image"}}),t._l(t.vertiN,(function(r){return e("div",{key:r},[e("div",{staticClass:"btn-left"},t._l(t.horiN,(function(n){return e("button",{key:n,staticClass:"btn btn-pink btn-circle",style:t.getButtonStyle(2*(r-1),n-1),attrs:{id:"btn"+2*(r-1)+"-"+(n-1),type:"button"},on:{click:function(e){t.clickOnBoard(2*(r-1),n-1),t.clicked()}}})})),0),e("div",{staticClass:"btn-right"},t._l(t.horiN,(function(n){return e("button",{key:n,staticClass:"btn btn-pink btn-circle",style:t.getButtonStyle(2*(r-1)+1,n-1),attrs:{id:"btn"+(2*(r-1)+1)+"-"+(n-1),type:"button"},on:{click:function(e){t.clickOnBoard(2*(r-1)+1,n-1),t.clicked()}}})})),0)])}))],2)],1)},o=[],a=n("60a3"),s=n("5f5b"),c=n("b1e0");n("f9e3"),n("2dd8"),n("cb29");function u(t,r){var n=document.getElementById("kitten-image"),e="btn"+t+"-"+r,i=document.getElementById(e);n.style.position="absolute",n.style.left=(null===i||void 0===i?void 0:i.offsetLeft)-15+"px",n.style.top=(null===i||void 0===i?void 0:i.offsetTop)-15+"px"}var h=e["default"].extend({data:function(){for(var t=Math.floor(.85*window.innerHeight/86),r=Math.floor(.6*window.innerWidth/43),n=Math.floor(t-1),e=Math.floor((r-1)/2),i=Array(2*t),o=0;o<2*t;o++)i[o]=Array(r).fill(!1);return{windowH:window.innerHeight,windowW:window.innerWidth,vertiN:t,horiN:r,gameStart:!1,shownButton:!0,boardArray:i,currentX:n,currentY:e}},methods:{onResize:function(){this.windowH=window.innerHeight,this.windowW=window.innerWidth;var t=.85*(this.windowH-55);this.vertiN=Math.floor(t/86);var r=.6*this.windowW;this.horiN=Math.floor(r/43)},getMainContainerStyle:function(){var t=this.windowH-100;return{marginTop:.15*t/4+"px"}},clickOnBoard:function(t,r){this.boardArray[t][r]=!0,console.log(this.boardArray),this.$forceUpdate()},getButtonStyle:function(t,r){return console.log(this.boardArray[t][r]),this.boardArray[t][r]?{backgroundColor:"palevioletred"}:{}},getOffset:function(t){var r=t.getBoundingClientRect();return{left:r.left+window.scrollX,top:r.top+window.scrollY}},clicked:function(){console.log(this.vertiN,this.horiN),this.currentX<this.currentY?this.canUpMove(this.currentX,this.currentY)?this.upMove():this.canLeftMove(this.currentX,this.currentY)?this.leftMove():this.canRightMove(this.currentX,this.currentY)?this.rightMove():this.canDownMove(this.currentX,this.currentY)?this.downMove():this.$bvModal.show("win-modal"):this.canLeftMove(this.currentX,this.currentY)?this.leftMove():this.canUpMove(this.currentX,this.currentY)?this.upMove():this.canDownMove(this.currentX,this.currentY)?this.downMove():this.canRightMove(this.currentX,this.currentY)?this.rightMove():this.$bvModal.show("win-modal"),this.detectWinOrLose()},canLeftMove:function(t,r){var n=this.boardArray[t][r-1];return 0==r||!n&&this.canLeftMove(t,r-1)},canRightMove:function(t,r){var n=this.boardArray[t][r+1];return r==this.horiN||!n&&this.canRightMove(t,r+1)},canUpMove:function(t,r){var n=this.boardArray[t-1][r],e=this.boardArray[t-1][r-1],i=this.boardArray[t-1][r+1];return!(1!=t||n&&i)||(1!=t||!n||!i)&&(t%2!=0?(!n||!i)&&(n?this.canUpMove(t-1,r+1):i?this.canUpMove(t-1,r):this.canUpMove(t-1,r)||this.canUpMove(t-1,r+1)):(!n||!e)&&(n?this.canUpMove(t-1,r-1):e?this.canUpMove(t-1,r):this.canUpMove(t-1,r)||this.canUpMove(t-1,r-1)))},canDownMove:function(t,r){var n=this.boardArray[t+1][r],e=this.boardArray[t+1][r-1],i=this.boardArray[t+1][r+1];return!(t!=2*this.vertiN-2||n&&i)||(t!=2*this.vertiN-2||!n||!i)&&(t%2!=0?(!n||!i)&&(n?this.canDownMove(t+1,r+1):i?this.canDownMove(t+1,r):this.canDownMove(t+1,r)||this.canDownMove(t+1,r+1)):(!n||!e)&&(n?this.canDownMove(t+1,r-1):e?this.canDownMove(t+1,r):this.canDownMove(t+1,r)||this.canDownMove(t+1,r-1)))},leftMove:function(){u(this.currentX,this.currentY-1),this.currentY-=1},rightMove:function(){u(this.currentX,this.currentY+1),this.currentY+=1},upMove:function(){var t=this.boardArray[this.currentX-1][this.currentY],r=this.boardArray[this.currentX-1][this.currentY-1];this.currentX%2!=0||r?0==t?(u(this.currentX-1,this.currentY),this.currentX-=1):(u(this.currentX-1,this.currentY+1),this.currentX-=1,this.currentY+=1):(u(this.currentX-1,this.currentY-1),this.currentX-=1,this.currentY-=1)},downMove:function(){var t=this.boardArray[this.currentX+1][this.currentY],r=this.boardArray[this.currentX+1][this.currentY-1];this.currentX%2!=0||r?t?(u(this.currentX+1,this.currentY+1),this.currentX+=1,this.currentY+=1):(u(this.currentX+1,this.currentY),this.currentX+=1):(u(this.currentX+1,this.currentY-1),this.currentX+=1,this.currentY-=1)},detectWinOrLose:function(){0!=this.currentX&&0!=this.currentY||this.$bvModal.show("lose-modal")},handleNewGame:function(){location.reload()}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)})),u(this.currentX,this.currentY)}});a["a"].use(s["a"]),a["a"].use(c["a"]),n("3a62");var l=h,d=l,v=(n("dffe"),n("2877")),f=Object(v["a"])(d,i,o,!1,null,"5c9c5864",null),p=f.exports;e["default"].config.productionTip=!1,new e["default"]({render:function(t){return t(p)}}).$mount("#app")},dffe:function(t,r,n){"use strict";var e=n("35b1"),i=n.n(e);i.a}});
//# sourceMappingURL=app.bbf1cea2.js.map