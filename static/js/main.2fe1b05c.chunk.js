(this["webpackJsonpreact-speed-typing"]=this["webpackJsonpreact-speed-typing"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),u=n(0),r=n.n(u),a=n(4),i=n.n(a),s=(n(10),n(2));var b=function(){var e=Object(u.useState)(30),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)("START"),a=Object(s.a)(r,2),i=a[0],b=a[1],j=Object(u.useState)(""),o=Object(s.a)(j,2),d=o[0],l=o[1],O=Object(u.useState)(!1),f=Object(s.a)(O,2),h=f[0],p=f[1],m=Object(u.useState)(0),g=Object(s.a)(m,2),x=g[0],S=g[1],v=Object(u.useState)("PAUSE"),C=Object(s.a)(v,2),y=C[0],R=C[1],T=Object(u.useRef)(null);return Object(u.useEffect)((function(){n>0&&h?setTimeout((function(){c((function(e){return e-1}))}),1e3):(p(!1),S(function(e){return e.trim().split(" ").filter((function(e){return""!==e})).length}(d)))}),[n,h]),{text:d,handleChange:function(e){var t=e.target.value;l(t)},running:h,inputRef:T,time:n,startGame:function(){c(30),p(!0),T.current.disabled=!1,T.current.focus(),l(""),b("Play Again")},count:x,btn:i,resume:function(){p(!h),T.current.disabled=h,T.current.focus(),R(h?"Resume":"Pause")},pause:y}};var j=function(){var e=b(),t=e.text,n=e.handleChange,u=e.running,r=e.inputRef,a=e.time,i=e.startGame,s=e.count,j=e.btn,o=e.pause,d=e.resume;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Speed Typing Game"}),Object(c.jsx)("textarea",{value:t,onChange:n,disabled:!u,ref:r}),Object(c.jsxs)("h4",{children:["Time remaining: ",a]}),Object(c.jsxs)("button",{disabled:u,onClick:i,children:[" ",j]}),Object(c.jsxs)("button",{onClick:d,children:[" ",o]}),Object(c.jsxs)("h1",{children:["Word Count: ",s," "]})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2fe1b05c.chunk.js.map