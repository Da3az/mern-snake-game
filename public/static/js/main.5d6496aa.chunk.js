(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=(a(33),a(15)),i=a(5),o=a.n(i),u=a(9),m=a(4),d=function(e){var t=e.snakeDots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){var a={top:"".concat(e[1],"%"),left:"".concat(e[0],"%")};return r.a.createElement("div",{className:"snake-dot",key:t,style:a})})))},f=function(e){var t=e.food,a={top:"".concat(t[1],"%"),left:"".concat(t[0],"%")};return r.a.createElement("div",{className:"snake-food",style:a})},h=(a(17),a(1));function p(e){return{type:"LEVEL_UP",payload:e}}function b(e){return{type:"SCORE_BOARD",payload:e}}var E=a(6),v=a.n(E),g=function(){return[2*Math.floor(50*Math.random()),2*Math.floor(50*Math.random())]};var w=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(h.c)((function(e){return e})),i=l.user,E=Object(n.useState)([[0,0],[2,0],[4,0]]),w=Object(m.a)(E,2),O=w[0],j=w[1],y=Object(n.useState)([g()[0],g()[1]]),k=Object(m.a)(y,2),S=k[0],z=k[1],N=Object(n.useState)("right"),x=Object(m.a)(N,2),B=x[0],_=x[1],C=Object(n.useState)(!0),A=Object(m.a)(C,2),M=A[0],R=A[1],V=Object(n.useState)(100),L=Object(m.a)(V,2),P=L[0],T=L[1],D=Object(h.b)();Object(n.useEffect)((function(){a&&M&&(document.onkeydown=U,q())}),[O,a,M]);for(var J=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.score,e.next=3,v.a.post("https://snake-react-game.herokuapp.com/",{score:t,user:i});case 3:return e.sent,e.next=6,v.a.get("https://snake-react-game.herokuapp.com/scores").then((function(e){var t=e.data;return D(b(t))}));case 6:e.sent,D(p(!1)),D({type:"RESET_SCORE"});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){switch((e=e||window.event).keyCode){case 38:"down"!==B&&_("up");break;case 40:"up"!==B&&_("down");break;case 37:"right"!==B&&_("left");break;case 39:"left"!==B&&_("right")}},F=function(e){return!(e[0]<0||e[0]>=100||e[1]>=100||e[1]<0)||(c(!1),alert("on border"),J(),!1)},H=function(e,t){var a=!0;return t.forEach((function(t,n){JSON.stringify(t)==JSON.stringify(e)&&(c(!1),alert("selfHit"),J(),a=!1)})),a},Y=function(e,t){Object(s.a)(O);return JSON.stringify(e)==JSON.stringify(t)&&(z([g()[0],g()[1]]),D({type:"UPDATE_SCORE",payload:O.length-2}),(O.length-1)%5==0&&(D(p(!0)),P>20&&T(P-15)),!0)},q=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){return setTimeout((function(){return e("time")}),P)}));case 2:a=Object(s.a)(O),n=a[a.length-1],e.t0=B,e.next="up"===e.t0?7:"down"===e.t0?9:"left"===e.t0?11:"right"===e.t0?13:15;break;case 7:return n=[n[0],n[1]-2],e.abrupt("break",15);case 9:return n=[n[0],n[1]+2],e.abrupt("break",15);case 11:return n=[n[0]-2,n[1]],e.abrupt("break",15);case 13:return n=[n[0]+2,n[1]],e.abrupt("break",15);case 15:H(n,a)&&F(n)?(Y(n,S)||a.shift(),a.push(n),j(a)):(_("right"),T(100),j([[0,0],[2,0],[4,0]]));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=document.getElementsByClassName("switchButton"),G=0;G<I.length;G++){I[G].addEventListener("click",(function(){R(!M)}))}return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-area"},!a&&r.a.createElement("button",{onClick:function(){return c(!0)},className:"start"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-caret-right-square-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"}))),r.a.createElement(d,{snakeDots:O}),r.a.createElement(f,{food:S})),a&&M&&r.a.createElement("div",{id:"settings"},r.a.createElement("button",{className:"switchButton",id:"pause"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-pause-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"}))),r.a.createElement("button",{className:"switchButton",id:"play",disabled:!0},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-skip-start-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"}),r.a.createElement("path",{d:"M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"})))),a&&!M&&r.a.createElement("div",{id:"settings"},r.a.createElement("button",{className:"switchButton",id:"pause",disabled:!0},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-pause-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"}))),r.a.createElement("button",{className:"switchButton",id:"play"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-skip-start-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"}),r.a.createElement("path",{d:"M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"})))))},O=(a(58),function(e){var t=Object(h.c)((function(e){return e}));return r.a.createElement("div",{className:"score"},r.a.createElement("h1",null,"Score :   ",t.score&&r.a.createElement("span",{id:"fade"},t.score)),r.a.createElement("h1",null,"Level ",t.level))});function j(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=(t[0],t[1],Object(h.b)()),c=Object(h.c)((function(e){return e.scoreBoard})),l=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://snake-react-game.herokuapp.com/scores").then((function(e){var t=e.data;return a(b(t))}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("div",{className:"scoreboard"},c.length>0&&r.a.createElement("h1",null,"Scoreboard"),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement("li",null,e.score," by ",e.username)}))))}function y(){var e=Object(n.useState)("unnamed"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),i=s[0],o=s[1],u=Object(h.b)();Object(n.useEffect)((function(){}),[a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"snake"},r.a.createElement("svg",{version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m94.57 328.278c-1.3 0-2.604-.169-3.882-.511-3.843-1.029-7.119-3.543-9.108-6.989l-78.57-136.088c-1.989-3.445-2.528-7.54-1.499-11.382 1.03-3.843 3.544-7.119 6.989-9.108 40.588-23.435 92.677-9.478 116.112 31.112l43.569 75.465c4.143 7.174 1.685 16.348-5.49 20.49l-60.621 35c-2.299 1.329-4.889 2.011-7.5 2.011z",fill:"#4c8577","data-original":"#f4b978",class:""}),r.a.createElement("path",{d:"m475.603 78.476-16.172-13.476 16.172-13.477c6.364-5.304 7.225-14.762 1.921-21.126-5.304-6.365-14.764-7.223-21.126-1.921l-25.829 21.524h-34.569c-8.284 0-15 6.716-15 15s6.716 15 15 15h34.569l25.828 21.523c2.805 2.337 6.209 3.477 9.595 3.477 4.297 0 8.564-1.838 11.531-5.398 5.304-6.363 4.444-15.822-1.92-21.126z",fill:"#be0000","data-original":"#be0000",class:""}),r.a.createElement("path",{d:"m345.013 0h-89.013c-35.793 0-64.819 28.997-64.854 64.789l-.146 207.211h130v-142h25c36.177 0 65.546-29.708 64.992-66.009-.543-35.666-30.309-63.991-65.979-63.991z",fill:"#4c8577","data-original":"#f4b978",class:""}),r.a.createElement("path",{d:"m321 272v-142h25c36.177 0 65.546-29.708 64.992-66.009-.544-35.666-30.309-63.991-65.979-63.991h-89.013v272z",fill:"#4e6e58","data-original":"#ea9b58",class:""}),r.a.createElement("path",{d:"m192 90v100c27.614 0 50-22.386 50-50s-22.386-50-50-50z",fill:"#7adfbb","data-original":"#896645",class:""}),r.a.createElement("g",null,r.a.createElement("path",{d:"m390.998 381.789c-.776.059-1.555.107-2.336.144.783-.032 1.561-.085 2.336-.144z",fill:"#4c8577","data-original":"#f4b978",class:""})),r.a.createElement("path",{d:"m386 397h-260c-35.898 0-65-29.101-65-65 0-35.898 29.101-65 65-65h260c35.898 0 65 29.101 65 65 0 35.899-29.101 65-65 65z",fill:"#4e6e58","data-original":"#f7daa1",class:""}),r.a.createElement("path",{d:"m386 397h-130v-130h130c35.898 0 65 29.101 65 65 0 35.899-29.101 65-65 65z",fill:"#4c8577","data-original":"#f4b978",class:""}),r.a.createElement("path",{d:"m281 382h100c0-27.614-22.386-50-50-50s-50 22.386-50 50z",fill:"#7adfbb","data-original":"#73543b",class:""}),r.a.createElement("path",{d:"m447 382h-382c-35.841 0-65 29.159-65 65s29.159 65 65 65h382c35.841 0 65-29.159 65-65s-29.159-65-65-65z",fill:"#4c8577","data-original":"#f4b978",class:""}),r.a.createElement("path",{d:"m512 447c0-35.841-29.159-65-65-65h-191v130h191c35.841 0 65-29.159 65-65z",fill:"#4e6e58","data-original":"#ea9b58",class:""}),r.a.createElement("path",{d:"m216 382h-120c0 33.137 26.863 60 60 60s60-26.863 60-60z",fill:"#7adfbb","data-original":"#896645",class:""}),r.a.createElement("path",{d:"m231 267h-100c0 27.614 22.386 50 50 50s50-22.386 50-50z",fill:"#7adfbb","data-original":"#896645",class:""}),r.a.createElement("path",{d:"m296 512h120c0-33.137-26.863-60-60-60s-60 26.863-60 60z",fill:"#7adfbb","data-original":"#73543b",class:""}),r.a.createElement("path",{d:"m316 85c-8.284 0-15-6.716-15-15v-20c0-8.284 6.716-15 15-15s15 6.716 15 15v20c0 8.284-6.716 15-15 15z",fill:"#05303d","data-original":"#05303d"}))))),r.a.createElement("div",{className:"user"},r.a.createElement("p",null,"User Name"),a?r.a.createElement("p",{id:"user"},a):r.a.createElement("p",{id:"user"},"unnamed")),r.a.createElement("div",{className:"form"},r.a.createElement("input",{type:"text",placeholder:"My user name",value:i,onChange:function(e){o(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:function(){return""==i?c("unnamed"):(c(i),u({type:"SET_PLAYER",payload:i})),void o("")}},"Enter")))}a(26);var k=a(7),S=a(3),z={level:1,score:0,user:"unnamed",scoreBoard:[]},N=Object(k.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SCORE":return Object(S.a)(Object(S.a)({},e),{},{score:t.payload});case"RESET_SCORE":return Object(S.a)(Object(S.a)({},e),{},{score:0});case"LEVEL_UP":if(t.payload){var a=e.level+1;return Object(S.a)(Object(S.a)({},e),{},{level:a})}return Object(S.a)(Object(S.a)({},e),{},{level:1});case"SET_PLAYER":return Object(S.a)(Object(S.a)({},e),{},{user:t.payload});case"SCORE_BOARD":return Object(S.a)(Object(S.a)({},e),{},{scoreBoard:t.payload});default:return e}return e})),x=function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(h.a,{store:N},r.a.createElement("div",{className:"app__header"},r.a.createElement(y,null)),r.a.createElement("div",{className:"app__body"},r.a.createElement("div",{className:"app_game"},r.a.createElement(w,null)),r.a.createElement("div",{className:"app__score"},r.a.createElement(O,null),r.a.createElement(j,null)))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5d6496aa.chunk.js.map