(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),s=(a(69),a(3)),o=a(38),i=a(7),u={level:1,score:0,player:{},scoreBoard:[],scoreBoardInd:[],alert:{type:"",message:""}},m=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SCORE":return Object(i.a)(Object(i.a)({},e),{},{score:t.payload});case"RESET_SCORE":return Object(i.a)(Object(i.a)({},e),{},{score:0});case"LEVEL_UP":if(t.payload){var a=e.level+1;return Object(i.a)(Object(i.a)({},e),{},{level:a})}return Object(i.a)(Object(i.a)({},e),{},{level:1});case"SETTING_PLAYER":return Object(i.a)(Object(i.a)({},e),{},{player:t.payload});case"SCORE_BOARD":return Object(i.a)(Object(i.a)({},e),{},{scoreBoard:t.payload});case"SCORE_BOARD_IND":return Object(i.a)(Object(i.a)({},e),{},{scoreBoardInd:t.payload});case"SET_ALERT":return Object(i.a)(Object(i.a)({},e),{},{alert:t.payload});default:return e}})),d=a(22),p=a(5),f=a(19),b=a.n(f),E=a(27),h=a(13);function v(e){return{type:"LEVEL_UP",payload:e}}function g(e){return{type:"SCORE_BOARD",payload:e}}function O(e){return{type:"SET_ALERT",payload:e}}function y(e){return{type:"SETTING_PLAYER",payload:e}}var w=a(10),j=a.n(w),N=a(118);a(92),a(93),a(94);function k(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(h.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(""),d=Object(h.a)(m,2),f=d[0],v=d[1],g=Object(n.useState)("login"),w=Object(h.a)(g,2),k=w[0],S=w[1],C=Object(s.b)(),_=Object(p.f)(),B=Object(s.c)((function(e){return e.player}));function x(){return(x=Object(E.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(f,a,i),e.next=4,j.a.post("/user/register",{username:f,email:a,password:i}).then((function(e){var t=e.data,a=t.type,n=t.message;C(O({type:a,message:n})),"success"===a&&(v(""),c(""),u(""),S("login"))})).catch((function(e,t){return console.log(e,t)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(E.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j.a.post("/user/login",{email:a,password:i}).then((function(e){var t=e.data,a=t.type,n=t.message,r=t.user;C(O({type:a,message:n})),r&&_.push("/")})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){j.a.get("/user/authenticated").then((function(e){return _.push("/")})).catch((function(e){return C(y({_id:"",username:"",email:""}))}))}),[_,C]),r.a.createElement("div",{className:"auth",id:"auth"},B._id?r.a.createElement("div",{className:"reload"},"reloading..."):"login"===k?r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:function(e){return z.apply(this,arguments)},className:"form",type:"submit",action:""},r.a.createElement("h1",null,"Log-in"),r.a.createElement("label",{htmlFor:""},"E-mail"),r.a.createElement("input",{type:"email",value:a,onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Password"),r.a.createElement("input",{value:i,onChange:function(e){return u(e.target.value)},type:"password",required:!0}),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"contained",className:"btn",label:"Submit",primary:!0,type:"submit"},"Login"),r.a.createElement("p",null,"Don't have an account yet? ",r.a.createElement("span",{onClick:function(){c(""),u(""),S("register")}},"Register here"),"."))):r.a.createElement("div",{className:"register"},r.a.createElement("form",{onSubmit:function(e){return x.apply(this,arguments)},className:"form",action:""},r.a.createElement("h1",null,"Register"),r.a.createElement("label",{htmlFor:""},"Username"),r.a.createElement("input",{value:f,onChange:function(e){return v(e.target.value)},type:"name",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"E-mail"),r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},type:"email",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Password"),r.a.createElement("input",{value:i,onChange:function(e){return u(e.target.value)},type:"password",required:!0}),r.a.createElement("br",null),r.a.createElement(N.a,{variant:"contained",className:"btn",label:"Submit",primary:!0,type:"submit"},"Register"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement("span",{onClick:function(){v(""),c(""),u(""),S("login")}},"Login here"),"."))))}var S=a(61),C=function(e){var t=e.snakeDots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){var a={top:"".concat(e[1],"%"),left:"".concat(e[0],"%")};return r.a.createElement("div",{className:"snake-dot",key:t,style:a})})))},_=function(e){var t=e.food,a={top:"".concat(t[1],"%"),left:"".concat(t[0],"%")};return r.a.createElement("div",{className:"snake-food",style:a})};a(96);function B(e){var t=e.message,a=e.cancel;return r.a.createElement("div",{className:"alert"},r.a.createElement("div",{className:"alert_body"},r.a.createElement("p",null,t),r.a.createElement("button",{onClick:function(){return a()}},"ok")))}a(97);var x=function(){return[2*Math.floor(50*Math.random()),2*Math.floor(50*Math.random())]};var z=function(){for(var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(s.c)((function(e){return e.player})),o=Object(s.c)((function(e){return e.score})),i=Object(n.useState)([[0,0],[2,0],[4,0]]),u=Object(h.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)([x()[0],x()[1]]),f=Object(h.a)(p,2),O=f[0],y=f[1],w=Object(n.useState)("right"),N=Object(h.a)(w,2),k=N[0],z=N[1],R=Object(n.useState)(!0),A=Object(h.a)(R,2),L=A[0],T=A[1],D=Object(n.useState)(100),M=Object(h.a)(D,2),P=M[0],V=M[1],F=Object(n.useState)(""),I=Object(h.a)(F,2),q=I[0],J=I[1],U=Object(s.b)(),H=function(){var e=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.username,e.next=3,j.a.post("/score",{score:o,user:t});case 3:return e.next=5,j.a.get("/score/scores").then((function(e){var t=e.data;return U(g(t))}));case 5:U(v(!1)),U({type:"RESET_SCORE"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){return!(e[0]<0||e[0]>=100||e[1]>=100||e[1]<0)||(c(!1),J("Snake on border"),H(),!1)},Y=function(e,t){var a=!0;return t.forEach((function(t,n){JSON.stringify(t)===JSON.stringify(e)&&(c(!1),J("Snake on itself"),H(),a=!1)})),a},W=function(e,t){return JSON.stringify(e)===JSON.stringify(t)&&(y([x()[0],x()[1]]),U(function(e){return{type:"UPDATE_SCORE",payload:e}}(m.length-2)),(m.length-1)%5===0&&(U(v(!0)),P>20&&V(P-15)),!0)},K=function(){var e=Object(E.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){return setTimeout((function(){return e("time")}),P)}));case 2:a=Object(S.a)(m),n=a[a.length-1],e.t0=k,e.next="up"===e.t0?7:"down"===e.t0?9:"left"===e.t0?11:"right"===e.t0?13:15;break;case 7:return n=[n[0],n[1]-2],e.abrupt("break",16);case 9:return n=[n[0],n[1]+2],e.abrupt("break",16);case 11:return n=[n[0]-2,n[1]],e.abrupt("break",16);case 13:return n=[n[0]+2,n[1]],e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:Y(n,a)&&G(n)?(W(n,O)||a.shift(),a.push(n),d(a)):(z("right"),V(100),d([[0,0],[2,0],[4,0]]));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=document.getElementsByClassName("switchButton"),X=0;X<Q.length;X++){Q[X].addEventListener("click",(function(){T(!L)}))}return document.onkeydown=function(e){switch((e=e||window.event).keyCode){case 38:"down"!==k&&z("up");break;case 40:"up"!==k&&z("down");break;case 37:"right"!==k&&z("left");break;case 39:"left"!==k&&z("right")}},Object(n.useEffect)((function(){a&&L&&K()}),[m,a,L]),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-area"},""!==q&&r.a.createElement(B,{message:q,cancel:function(){return J("")}}),!a&&r.a.createElement("button",{onClick:function(){return c(!0)},className:"start"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-caret-right-square-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"}))),r.a.createElement(C,{snakeDots:m}),r.a.createElement(_,{food:O})),a&&L&&r.a.createElement("div",{id:"settings"},r.a.createElement("button",{className:"switchButton",id:"pause"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-pause-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"}))),r.a.createElement("button",{className:"switchButton",id:"play",disabled:!0},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-skip-start-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"}),r.a.createElement("path",{d:"M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"})))),a&&!L&&r.a.createElement("div",{id:"settings"},r.a.createElement("button",{className:"switchButton",id:"pause",disabled:!0},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-pause-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"}))),r.a.createElement("button",{className:"switchButton",id:"play"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-skip-start-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"}),r.a.createElement("path",{d:"M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"})))))},R=(a(98),function(e){var t=Object(s.c)((function(e){return e}));return r.a.createElement("div",{className:"score"},r.a.createElement("h1",null,"Score :   ",t.score&&r.a.createElement("span",{id:"fade"},t.score)),r.a.createElement("h1",null,"Level ",t.level))}),A=a(56),L=a.n(A),T=a(58),D=a.n(T),M=a(57),P=a.n(M);function V(){var e=Object(p.f)(),t=Object(s.c)((function(e){return e.player}));function a(e){for(var t=document.getElementsByClassName("link"),a=0;a<t.length;a++){t[a].style.border="none"}e.style.borderBottom="2px solid blue"}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"snake"},r.a.createElement("svg",{version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m94.57 328.278c-1.3 0-2.604-.169-3.882-.511-3.843-1.029-7.119-3.543-9.108-6.989l-78.57-136.088c-1.989-3.445-2.528-7.54-1.499-11.382 1.03-3.843 3.544-7.119 6.989-9.108 40.588-23.435 92.677-9.478 116.112 31.112l43.569 75.465c4.143 7.174 1.685 16.348-5.49 20.49l-60.621 35c-2.299 1.329-4.889 2.011-7.5 2.011z",fill:"#4c8577","data-original":"#f4b978"}),r.a.createElement("path",{d:"m475.603 78.476-16.172-13.476 16.172-13.477c6.364-5.304 7.225-14.762 1.921-21.126-5.304-6.365-14.764-7.223-21.126-1.921l-25.829 21.524h-34.569c-8.284 0-15 6.716-15 15s6.716 15 15 15h34.569l25.828 21.523c2.805 2.337 6.209 3.477 9.595 3.477 4.297 0 8.564-1.838 11.531-5.398 5.304-6.363 4.444-15.822-1.92-21.126z",fill:"#be0000","data-original":"#be0000"}),r.a.createElement("path",{d:"m345.013 0h-89.013c-35.793 0-64.819 28.997-64.854 64.789l-.146 207.211h130v-142h25c36.177 0 65.546-29.708 64.992-66.009-.543-35.666-30.309-63.991-65.979-63.991z",fill:"#4c8577","data-original":"#f4b978"}),r.a.createElement("path",{d:"m321 272v-142h25c36.177 0 65.546-29.708 64.992-66.009-.544-35.666-30.309-63.991-65.979-63.991h-89.013v272z",fill:"#4e6e58","data-original":"#ea9b58"}),r.a.createElement("path",{d:"m192 90v100c27.614 0 50-22.386 50-50s-22.386-50-50-50z",fill:"#7adfbb","data-original":"#896645"}),r.a.createElement("g",null,r.a.createElement("path",{d:"m390.998 381.789c-.776.059-1.555.107-2.336.144.783-.032 1.561-.085 2.336-.144z",fill:"#4c8577","data-original":"#f4b978"})),r.a.createElement("path",{d:"m386 397h-260c-35.898 0-65-29.101-65-65 0-35.898 29.101-65 65-65h260c35.898 0 65 29.101 65 65 0 35.899-29.101 65-65 65z",fill:"#4e6e58","data-original":"#f7daa1"}),r.a.createElement("path",{d:"m386 397h-130v-130h130c35.898 0 65 29.101 65 65 0 35.899-29.101 65-65 65z",fill:"#4c8577","data-original":"#f4b978"}),r.a.createElement("path",{d:"m281 382h100c0-27.614-22.386-50-50-50s-50 22.386-50 50z",fill:"#7adfbb","data-original":"#73543b"}),r.a.createElement("path",{d:"m447 382h-382c-35.841 0-65 29.159-65 65s29.159 65 65 65h382c35.841 0 65-29.159 65-65s-29.159-65-65-65z",fill:"#4c8577","data-original":"#f4b978"}),r.a.createElement("path",{d:"m512 447c0-35.841-29.159-65-65-65h-191v130h191c35.841 0 65-29.159 65-65z",fill:"#4e6e58","data-original":"#ea9b58"}),r.a.createElement("path",{d:"m216 382h-120c0 33.137 26.863 60 60 60s60-26.863 60-60z",fill:"#7adfbb","data-original":"#896645"}),r.a.createElement("path",{d:"m231 267h-100c0 27.614 22.386 50 50 50s50-22.386 50-50z",fill:"#7adfbb","data-original":"#896645"}),r.a.createElement("path",{d:"m296 512h120c0-33.137-26.863-60-60-60s-60 26.863-60 60z",fill:"#7adfbb","data-original":"#73543b"}),r.a.createElement("path",{d:"m316 85c-8.284 0-15-6.716-15-15v-20c0-8.284 6.716-15 15-15s15 6.716 15 15v20c0 8.284-6.716 15-15 15z",fill:"#05303d","data-original":"#05303d"}))))),r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"link",onClick:function(t){a(t.currentTarget),e.push("/")}}," ",r.a.createElement(L.a,null)," "),r.a.createElement("div",{className:"link",onClick:function(t){a(t.currentTarget),e.push("/score")}}," ",r.a.createElement(P.a,null)," ")),r.a.createElement("div",{className:"user"},r.a.createElement("p",null,"Welcome"),r.a.createElement("p",{id:"user"},null===t||void 0===t?void 0:t.username)),r.a.createElement("button",{onClick:function(){j.a.get("/user/logout").then((function(t){return e.push("/auth")})).catch((function(e){return console.log("err happend")}))}},r.a.createElement(D.a,null)))}var F=a(59),I=a.n(F),q=a(60),J=a.n(q);function U(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.scoreBoard})),a=Object(s.c)((function(e){return e.scoreBoardInd})),c=Object(s.c)((function(e){return e.player}));return Object(n.useEffect)((function(){var t=c.username;j.a.get("score/scores").then((function(t){var a=t.data;e(g(a))})),j.a.post("score/scores/ind",{username:t}).then((function(t){var a=t.data;e({type:"SCORE_BOARD_IND",payload:a})}))}),[c.username,e]),r.a.createElement("div",{className:"scoreboard"},r.a.createElement("h1",null,"Scoreboard"),r.a.createElement("div",{className:"scoreboard_body"},r.a.createElement("div",{className:"scoreboard_global"},r.a.createElement(I.a,null),r.a.createElement("ol",null,t.map((function(e){return r.a.createElement("li",null,e.score," by ",e.username," on ",e.date)})))),r.a.createElement("div",{className:"scoreboard_inv"},r.a.createElement(J.a,null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement("li",null,e.score," by ",e.username," on ",e.date)}))))))}function H(){var e=Object(s.c)((function(e){return e.player})),t=Object(p.f)(),a=Object(s.b)();return Object(n.useEffect)((function(){j.a.get("/user/authenticated").then((function(e){var t=e.data.user,n=t.username,r=t._id,c=t.email;a(y({_id:r,username:n,email:c}))})).catch((function(e){return t.push("/auth")}))}),[t,a]),r.a.createElement(r.a.Fragment,null,e._id?r.a.createElement("div",{className:"app__body"},r.a.createElement("div",{className:"app__header"},r.a.createElement(V,null)),r.a.createElement(p.c,null,r.a.createElement(d.a,{path:"/score"},r.a.createElement("div",{className:"app__score"},r.a.createElement(U,null))),r.a.createElement(d.a,{path:"/"},r.a.createElement("div",{className:"app_game"},r.a.createElement(z,null)),r.a.createElement("div",{className:"app__score"},r.a.createElement(R,null))))):r.a.createElement("div",{className:"reload"},"reloading..."))}a(100);var G=a(35),Y=(a(101),function(){var e=Object(s.c)((function(e){return e.alert}));return Object(n.useEffect)((function(){switch(e.type){case"success":G.b.success(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;case"warning":G.b.warn(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;case"error":G.b.error(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}),[e]),r.a.createElement("div",{className:"app"},r.a.createElement(G.a,null),r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/auth"},r.a.createElement(k,null)),r.a.createElement(p.a,{path:"/"},r.a.createElement(H,null)))))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:m},r.a.createElement(Y,null))),document.getElementById("root"))},64:function(e,t,a){e.exports=a(102)},69:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.c3e42758.chunk.js.map