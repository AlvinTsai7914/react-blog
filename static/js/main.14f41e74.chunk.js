(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{31:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c,a=n(0),i=n(23),o=n.n(i),r=(n(31),n(4)),s=n(2),j=n(3),b="token",u=function(t){localStorage.setItem(b,t)},d=function(){return localStorage.getItem(b)},l="https://student-json-api.lidemy.me",O=function(t){return fetch("".concat(l,"/posts?_sort=createdAt&_order=desc&_start=").concat(t,"&_limit=5")).then((function(t){return t.json()}))},h=function(t){return fetch("".concat(l,"/posts?id=").concat(t)).then((function(t){return t.json()}))},p=function(){var t=d();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(t)}}).then((function(t){return t.json()}))},x=n(5),f=Object(a.createContext)(null),g=n(1),v=j.a.div(c||(c=Object(s.a)(["\n  color: red;\n"])));function m(){var t=Object(a.useContext)(f).setUser,e=Object(a.useState)(""),n=Object(r.a)(e,2),c=n[0],i=n[1],o=Object(a.useState)(""),s=Object(r.a)(o,2),j=s[0],b=s[1],d=Object(a.useState)(),O=Object(r.a)(d,2),h=O[0],m=O[1],S=Object(x.f)();return Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(null),function(t,e){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})}).then((function(t){return t.json()}))}(c,j).then((function(e){if(0===e.ok)return m(e.message);u(e.token),p().then((function(e){if(!e.ok)return u(null),m(e.toString());t(e.data),S.push("/")}))}))},children:[Object(g.jsxs)("div",{children:["username: ",Object(g.jsx)("input",{value:c,onChange:function(t){return i(t.target.value)}})]}),Object(g.jsxs)("div",{children:["password: ",Object(g.jsx)("input",{type:"password",value:j,onChange:function(t){return b(t.target.value)}})]}),Object(g.jsx)("button",{children:"\u767b\u5165"}),h&&Object(g.jsx)(v,{children:h})]})}var S,w,y,k,C,z,P=n(10),D=j.a.div(S||(S=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),F=j.a.div(w||(w=Object(s.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 20px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),T=Object(j.a)(P.b)(y||(y=Object(s.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]))),$=j.a.div(k||(k=Object(s.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]))),A=j.a.div(C||(C=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 8px;\n"]))),E=j.a.button(z||(z=Object(s.a)(["\n  padding: 8px 16px;\n  background: rgba(0, 0, 0, 0.1);\n  border: none;\n  margin: 4px;\n  cursor: pointer;\n"])));function J(t){var e=t.post;return Object(g.jsxs)(F,{children:[Object(g.jsx)(T,{to:"/post/".concat(e.id),children:e.title}),Object(g.jsx)($,{children:new Date(e.createdAt).toLocaleString()})]})}function L(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(),o=Object(r.a)(i,2),s=o[0],j=o[1],b=Object(a.useState)(),u=Object(r.a)(b,2),d=u[0],l=u[1],h=Object(a.useState)(0),p=Object(r.a)(h,2),x=p[0],f=p[1];return Object(a.useEffect)((function(){O(x).then((function(t){c(t)})),O(x+5).then((function(t){if(0===t.length)return l(!1);l(!0)})),O(x-5).then((function(t){if(0===t.length)return j(null);j(!0)}))}),[x]),Object(g.jsxs)(D,{children:[n.map((function(t){return Object(g.jsx)(J,{post:t},t.id)})),Object(g.jsxs)(A,{children:[!0===s&&Object(g.jsx)(E,{onClick:function(){f(x-5)},children:"\u4e0a\u4e00\u9801"}),!0===d&&Object(g.jsx)(E,{onClick:function(){f(x+5)},children:"\u4e0b\u4e00\u9801"})]})]})}var B,I,_,N,U,q,G,H,K,M,Q,R,V,W=n(17),X=j.a.div(B||(B=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),Y=j.a.div(I||(I=Object(s.a)(["\n  padding: 0 20%;\n"]))),Z=j.a.div(_||(_=Object(s.a)(["\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #333;\n  text-decoration: none;\n  margin-top: 64px;\n"]))),tt=j.a.div(N||(N=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-top: 16px;\n"]))),et=j.a.div(U||(U=Object(s.a)(["\n  color: #333;\n  font-size: 24px;\n"]))),nt=j.a.div(q||(q=Object(s.a)(["\n  font-size: 20px;\n  color: #333;\n  color: rgba(0, 0, 0, 0.8);\n"]))),ct=j.a.p(G||(G=Object(s.a)(["\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 2em;\n"])));function at(){var t=Object(a.useState)({}),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(x.h)().id;return Object(a.useEffect)((function(){h(i).then((function(t){return c.apply(void 0,Object(W.a)(t))}))}),[i]),Object(g.jsx)(X,{children:Object(g.jsxs)(Y,{children:[Object(g.jsx)(Z,{children:n&&n.title}),Object(g.jsxs)(tt,{children:[Object(g.jsx)(et,{children:n&&n.nickname}),Object(g.jsx)(nt,{children:n&&new Date(n.createdAt).toLocaleString()})]}),Object(g.jsx)(ct,{children:n&&n.body})]})})}var it,ot=j.a.div(H||(H=Object(s.a)(["\n  width: 50%;\n  margin: 100px auto;\n"]))),rt=j.a.div(K||(K=Object(s.a)(["\n  position: relative;\n"]))),st=j.a.input(M||(M=Object(s.a)(["\n  width: 20em;\n  padding: 8px;\n"]))),jt=j.a.textarea(Q||(Q=Object(s.a)(["\n  width: 100%;\n  height: 400px;\n  margin-top: 8px;\n  padding: 8px;\n  box-sizing: border-box;\n"]))),bt=j.a.button(R||(R=Object(s.a)(["\n  position: absolute;\n  right: 0;\n  bottom: -48px;\n  padding: 8px 32px;\n"]))),ut=j.a.div(V||(V=Object(s.a)(["\n  color: red;\n"])));function dt(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),s=o[0],j=o[1],b=Object(a.useState)(),u=Object(r.a)(b,2),O=u[0],h=u[1],p=Object(x.f)(),f=function(){h("")};return Object(g.jsxs)(ot,{children:[Object(g.jsx)(rt,{children:Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t,e){var n=d();return fetch("".concat(l,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(n),"content-type":"application/json"},body:JSON.stringify({title:t,body:e})}).then((function(t){return t.json()}))}(s,n).then((function(t){if(0===t.ok)return h(t.message);p.push("/")}))},children:[Object(g.jsx)(st,{name:"newPostTitle",value:s,onChange:function(t){j(t.target.value)},onFocus:f,placeholder:"\u6587\u7ae0\u6a19\u984c..."}),Object(g.jsx)(jt,{name:"newPostContent",value:n,onChange:function(t){c(t.target.value)},onFocus:f,placeholder:"\u6587\u7ae0\u5167\u6587..."}),Object(g.jsx)(bt,{children:"\u9001\u51fa"})]})}),O&&Object(g.jsx)(ut,{children:O})]})}var lt,Ot,ht,pt,xt,ft,gt,vt=j.a.div(it||(it=Object(s.a)(["\n  color: red;\n"])));function mt(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),s=o[0],j=o[1],b=Object(a.useState)(""),d=Object(r.a)(b,2),O=d[0],h=d[1],f=Object(a.useState)(),v=Object(r.a)(f,2),m=v[0],S=v[1],w=Object(x.f)();return Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),S(null),function(t,e,n){return fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:t,username:e,password:n})}).then((function(t){return t.json()}))}(O,n,s).then((function(t){if(console.log(t),!t.ok)return S(t.message);u(t.token),p().then((function(t){if(!t.ok)return u(null),S(t.message);w.push("/")}))}))},children:[Object(g.jsxs)("div",{children:["username: ",Object(g.jsx)("input",{value:n,onChange:function(t){return c(t.target.value)}})]}),Object(g.jsxs)("div",{children:["password: ",Object(g.jsx)("input",{type:"password",value:s,onChange:function(t){return j(t.target.value)}})]}),Object(g.jsxs)("div",{children:["nickname:"," ",Object(g.jsx)("input",{type:"nickname",value:O,onChange:function(t){h(t.target.value)}})]}),Object(g.jsx)("button",{children:"\u767b\u5165"}),m&&Object(g.jsx)(vt,{children:m})]})}var St,wt,yt,kt,Ct,zt=j.a.div(lt||(lt=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),Pt=j.a.div(Ot||(Ot=Object(s.a)(["\n  padding: 0 20%;\n"]))),Dt=j.a.div(ht||(ht=Object(s.a)(["\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #333;\n  text-decoration: none;\n  margin-top: 64px;\n"]))),Ft=j.a.div(pt||(pt=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-top: 16px;\n"]))),Tt=j.a.div(xt||(xt=Object(s.a)(["\n  color: #333;\n  font-size: 24px;\n"]))),$t=j.a.div(ft||(ft=Object(s.a)(["\n  font-size: 20px;\n  color: #333;\n  color: rgba(0, 0, 0, 0.8);\n"]))),At=j.a.p(gt||(gt=Object(s.a)(["\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 2em;\n"])));function Et(){var t=Object(a.useState)({}),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(x.h)().id;return Object(a.useEffect)((function(){h(i).then((function(t){return c.apply(void 0,Object(W.a)(t))}))}),[i]),Object(g.jsx)(zt,{children:Object(g.jsxs)(Pt,{children:[Object(g.jsx)(Dt,{children:n&&n.title}),Object(g.jsxs)(Ft,{children:[Object(g.jsx)(Tt,{children:n&&n.nickname}),Object(g.jsx)($t,{children:n&&new Date(n.createdAt).toLocaleString()})]}),Object(g.jsx)(At,{children:n&&n.body})]})})}var Jt,Lt=j.a.div(St||(St=Object(s.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 20%;\n  box-sizing: border-box;\n  background: white;\n"]))),Bt=j.a.div(wt||(wt=Object(s.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]))),It=j.a.div(yt||(yt=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]))),_t=Object(j.a)(P.b)(kt||(kt=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"])),(function(t){return t.$active&&"\n    background: rgba(0,0,0,0.1);\n    "})),Nt=j.a.div(Ct||(Ct=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  "," {\n    margin-left: 64px;\n  }\n"])),It);function Ut(){var t=Object(x.g)(),e=Object(x.f)(),n=Object(a.useContext)(f),c=n.user,i=n.setUser;return Object(g.jsxs)(Lt,{children:[Object(g.jsxs)(Nt,{children:[Object(g.jsx)(Bt,{children:"\u90e8\u843d\u683c"}),Object(g.jsxs)(It,{children:[Object(g.jsx)(_t,{to:"/",$active:"/"===t.pathname,children:"\u9996\u9801"}),Object(g.jsx)(_t,{to:"/about",$active:"/about"===t.pathname,children:"About"}),c&&Object(g.jsx)(_t,{to:"/new-post",$active:"/new-post"===t.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(g.jsxs)(It,{children:[!c&&Object(g.jsx)(_t,{to:"/register",$active:"/register"===t.pathname,children:"\u8a3b\u518a"}),!c&&Object(g.jsx)(_t,{to:"/login",$active:"/login"===t.pathname,children:"\u767b\u5165"}),c&&Object(g.jsx)(_t,{onClick:function(){u(""),i(null),"/"!==t.pathname&&e.push("/")},children:"\u767b\u51fa"})]})]})}var qt=j.a.div(Jt||(Jt=Object(s.a)(["\n  padding-top: 64px;\n"])));var Gt=function(){var t=Object(a.useState)(),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){localStorage.token&&p().then((function(t){t.ok&&c(t.data)}))}),[]),Object(g.jsx)(f.Provider,{value:{user:n,setUser:c},children:Object(g.jsx)(qt,{children:Object(g.jsxs)(P.a,{basename:"/react-blog",children:[Object(g.jsx)(Ut,{}),Object(g.jsxs)(x.c,{children:[Object(g.jsx)(x.a,{exact:!0,path:"/",children:Object(g.jsx)(L,{})}),Object(g.jsx)(x.a,{path:"/login",children:Object(g.jsx)(m,{})}),Object(g.jsx)(x.a,{path:"/post/:id",children:Object(g.jsx)(at,{})}),Object(g.jsx)(x.a,{path:"/new-post",children:Object(g.jsx)(dt,{})}),Object(g.jsx)(x.a,{path:"/register",children:Object(g.jsx)(mt,{})}),Object(g.jsx)(x.a,{path:"/about",children:Object(g.jsx)(Et,{})})]})]})})})},Ht=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(g.jsx)(Gt,{}),document.getElementById("root")),Ht()}},[[39,1,2]]]);
//# sourceMappingURL=main.14f41e74.chunk.js.map