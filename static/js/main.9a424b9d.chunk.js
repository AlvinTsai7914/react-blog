(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n(23),o=n.n(i),r=(n(31),n(4)),s=n(2),j=n(3),b="token",u=function(e){localStorage.setItem(b,e)},d=function(){return localStorage.getItem(b)},l="https://student-json-api.lidemy.me",O=function(e){return fetch("".concat(l,"/posts?_sort=createdAt&_order=desc&_start=").concat(e,"&_limit=5")).then((function(e){return e.json()}))},h=function(e){return fetch("".concat(l,"/posts?id=").concat(e)).then((function(e){return e.json()}))},p=function(){var e=d();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))},x=n(5),f=Object(a.createContext)(null),g=n(1),v=j.a.div(c||(c=Object(s.a)(["\n  color: red;\n"])));function m(){var e=Object(a.useContext)(f).setUser,t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(""),s=Object(r.a)(o,2),j=s[0],b=s[1],d=Object(a.useState)(),O=Object(r.a)(d,2),h=O[0],m=O[1],S=Object(x.f)();return Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m(null),function(e,t){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()}))}(c,j).then((function(t){if(0===t.ok)return m(t.message);u(t.token),p().then((function(t){if(!t.ok)return u(null),m(t.toString());e(t.data),S.push("/")}))}))},children:[Object(g.jsxs)("div",{children:["username: ",Object(g.jsx)("input",{value:c,onChange:function(e){return i(e.target.value)}})]}),Object(g.jsxs)("div",{children:["password: ",Object(g.jsx)("input",{type:"password",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(g.jsx)("button",{children:"\u767b\u5165"}),h&&Object(g.jsx)(v,{children:h})]})}var S,w,y,k,C,z,P=n(7),D=j.a.div(S||(S=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),F=j.a.div(w||(w=Object(s.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 20px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]))),T=Object(j.a)(P.b)(y||(y=Object(s.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]))),$=j.a.div(k||(k=Object(s.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]))),A=j.a.div(C||(C=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 8px;\n"]))),E=j.a.button(z||(z=Object(s.a)(["\n  padding: 8px 16px;\n  background: rgba(0, 0, 0, 0.1);\n  border: none;\n  margin: 4px;\n  cursor: pointer;\n"])));function J(e){var t=e.post;return Object(g.jsxs)(F,{children:[Object(g.jsx)(T,{to:"/post/".concat(t.id),children:t.title}),Object(g.jsx)($,{children:new Date(t.createdAt).toLocaleString()})]})}function L(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),o=Object(r.a)(i,2),s=o[0],j=o[1],b=Object(a.useState)(),u=Object(r.a)(b,2),d=u[0],l=u[1],h=Object(a.useState)(0),p=Object(r.a)(h,2),x=p[0],f=p[1];return Object(a.useEffect)((function(){O(x).then((function(e){c(e)})),O(x+5).then((function(e){if(0===e.length)return l(!1);l(!0)})),O(x-5).then((function(e){if(0===e.length)return j(null);j(!0)}))}),[x]),Object(g.jsxs)(D,{children:[n.map((function(e){return Object(g.jsx)(J,{post:e},e.id)})),Object(g.jsxs)(A,{children:[!0===s&&Object(g.jsx)(E,{onClick:function(){f(x-5)},children:"\u4e0a\u4e00\u9801"}),!0===d&&Object(g.jsx)(E,{onClick:function(){f(x+5)},children:"\u4e0b\u4e00\u9801"})]})]})}var B,I,_,N,U,q,G,H,K,M,Q,R,V,W=n(17),X=j.a.div(B||(B=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),Y=j.a.div(I||(I=Object(s.a)(["\n  padding: 0 20%;\n"]))),Z=j.a.div(_||(_=Object(s.a)(["\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #333;\n  text-decoration: none;\n  margin-top: 64px;\n"]))),ee=j.a.div(N||(N=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-top: 16px;\n"]))),te=j.a.div(U||(U=Object(s.a)(["\n  color: #333;\n  font-size: 24px;\n"]))),ne=j.a.div(q||(q=Object(s.a)(["\n  font-size: 20px;\n  color: #333;\n  color: rgba(0, 0, 0, 0.8);\n"]))),ce=j.a.p(G||(G=Object(s.a)(["\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 2em;\n"])));function ae(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(x.h)().id;return Object(a.useEffect)((function(){h(i).then((function(e){return c.apply(void 0,Object(W.a)(e))}))}),[i]),Object(g.jsx)(X,{children:Object(g.jsxs)(Y,{children:[Object(g.jsx)(Z,{children:n&&n.title}),Object(g.jsxs)(ee,{children:[Object(g.jsx)(te,{children:n&&n.nickname}),Object(g.jsx)(ne,{children:n&&new Date(n.createdAt).toLocaleString()})]}),Object(g.jsx)(ce,{children:n&&n.body})]})})}var ie,oe=j.a.div(H||(H=Object(s.a)(["\n  width: 50%;\n  margin: 100px auto;\n"]))),re=j.a.div(K||(K=Object(s.a)(["\n  position: relative;\n"]))),se=j.a.input(M||(M=Object(s.a)(["\n  width: 20em;\n  padding: 8px;\n"]))),je=j.a.textarea(Q||(Q=Object(s.a)(["\n  width: 100%;\n  height: 400px;\n  margin-top: 8px;\n  padding: 8px;\n  box-sizing: border-box;\n"]))),be=j.a.button(R||(R=Object(s.a)(["\n  position: absolute;\n  right: 0;\n  bottom: -48px;\n  padding: 8px 32px;\n"]))),ue=j.a.div(V||(V=Object(s.a)(["\n  color: red;\n"])));function de(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),s=o[0],j=o[1],b=Object(a.useState)(),u=Object(r.a)(b,2),O=u[0],h=u[1],p=Object(x.f)(),f=function(){h("")};return Object(g.jsxs)(oe,{children:[Object(g.jsx)(re,{children:Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){var n=d();return fetch("".concat(l,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(n),"content-type":"application/json"},body:JSON.stringify({title:e,body:t})}).then((function(e){return e.json()}))}(s,n).then((function(e){if(0===e.ok)return h(e.message);p.push("/")}))},children:[Object(g.jsx)(se,{name:"newPostTitle",value:s,onChange:function(e){j(e.target.value)},onFocus:f,placeholder:"\u6587\u7ae0\u6a19\u984c..."}),Object(g.jsx)(je,{name:"newPostContent",value:n,onChange:function(e){c(e.target.value)},onFocus:f,placeholder:"\u6587\u7ae0\u5167\u6587..."}),Object(g.jsx)(be,{children:"\u9001\u51fa"})]})}),O&&Object(g.jsx)(ue,{children:O})]})}var le,Oe,he,pe,xe,fe,ge,ve=j.a.div(ie||(ie=Object(s.a)(["\n  color: red;\n"])));function me(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),s=o[0],j=o[1],b=Object(a.useState)(""),d=Object(r.a)(b,2),O=d[0],h=d[1],f=Object(a.useState)(),v=Object(r.a)(f,2),m=v[0],S=v[1],w=Object(x.f)();return Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S(null),function(e,t,n){return fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:t,password:n})}).then((function(e){return e.json()}))}(O,n,s).then((function(e){if(console.log(e),!e.ok)return S(e.message);u(e.token),p().then((function(e){if(!e.ok)return u(null),S(e.message);w.push("/")}))}))},children:[Object(g.jsxs)("div",{children:["username: ",Object(g.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)}})]}),Object(g.jsxs)("div",{children:["password: ",Object(g.jsx)("input",{type:"password",value:s,onChange:function(e){return j(e.target.value)}})]}),Object(g.jsxs)("div",{children:["nickname:"," ",Object(g.jsx)("input",{type:"nickname",value:O,onChange:function(e){h(e.target.value)}})]}),Object(g.jsx)("button",{children:"\u767b\u5165"}),m&&Object(g.jsx)(ve,{children:m})]})}var Se,we,ye,ke,Ce,ze=j.a.div(le||(le=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),Pe=j.a.div(Oe||(Oe=Object(s.a)(["\n  padding: 0 20%;\n"]))),De=j.a.div(he||(he=Object(s.a)(["\n  text-align: center;\n  font-size: 36px;\n  font-weight: bold;\n  color: #333;\n  text-decoration: none;\n  margin-top: 64px;\n"]))),Fe=j.a.div(pe||(pe=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-top: 16px;\n"]))),Te=j.a.div(xe||(xe=Object(s.a)(["\n  color: #333;\n  font-size: 24px;\n"]))),$e=j.a.div(fe||(fe=Object(s.a)(["\n  font-size: 20px;\n  color: #333;\n  color: rgba(0, 0, 0, 0.8);\n"]))),Ae=j.a.p(ge||(ge=Object(s.a)(["\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 2em;\n"])));function Ee(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(x.h)().id;return Object(a.useEffect)((function(){h(i).then((function(e){return c.apply(void 0,Object(W.a)(e))}))}),[i]),Object(g.jsx)(ze,{children:Object(g.jsxs)(Pe,{children:[Object(g.jsx)(De,{children:n&&n.title}),Object(g.jsxs)(Fe,{children:[Object(g.jsx)(Te,{children:n&&n.nickname}),Object(g.jsx)($e,{children:n&&new Date(n.createdAt).toLocaleString()})]}),Object(g.jsx)(Ae,{children:n&&n.body})]})})}var Je,Le=j.a.div(Se||(Se=Object(s.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 20%;\n  box-sizing: border-box;\n  background: white;\n"]))),Be=j.a.div(we||(we=Object(s.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]))),Ie=j.a.div(ye||(ye=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 64px;\n"]))),_e=Object(j.a)(P.b)(ke||(ke=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"])),(function(e){return e.$active&&"\n    background: rgba(0,0,0,0.1);\n    "})),Ne=j.a.div(Ce||(Ce=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  "," {\n    margin-left: 64px;\n  }\n"])),Ie);function Ue(){var e=Object(x.g)(),t=Object(x.f)(),n=Object(a.useContext)(f),c=n.user,i=n.setUser;return Object(g.jsxs)(Le,{children:[Object(g.jsxs)(Ne,{children:[Object(g.jsx)(Be,{children:"\u90e8\u843d\u683c"}),Object(g.jsxs)(Ie,{children:[Object(g.jsx)(_e,{to:"/",$active:"/"===e.pathname,children:"\u9996\u9801"}),Object(g.jsx)(_e,{to:"/about",$active:"/about"===e.pathname,children:"About"}),c&&Object(g.jsx)(_e,{to:"/new-post",$active:"/new-post"===e.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(g.jsxs)(Ie,{children:[!c&&Object(g.jsx)(_e,{to:"/register",$active:"/register"===e.pathname,children:"\u8a3b\u518a"}),!c&&Object(g.jsx)(_e,{to:"/login",$active:"/login"===e.pathname,children:"\u767b\u5165"}),c&&Object(g.jsx)(_e,{onClick:function(){u(""),i(null),"/"!==e.pathname&&t.push("/")},children:"\u767b\u51fa"})]})]})}var qe=j.a.div(Je||(Je=Object(s.a)(["\n  padding-top: 64px;\n"])));var Ge=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){localStorage.token&&p().then((function(e){e.ok&&c(e.data)}))}),[]),Object(g.jsx)(f.Provider,{value:{user:n,setUser:c},children:Object(g.jsx)(qe,{children:Object(g.jsxs)(P.a,{children:[Object(g.jsx)(Ue,{}),Object(g.jsxs)(x.c,{children:[Object(g.jsx)(x.a,{exact:!0,path:"/",children:Object(g.jsx)(L,{})}),Object(g.jsx)(x.a,{path:"/login",children:Object(g.jsx)(m,{})}),Object(g.jsx)(x.a,{path:"/post/:id",children:Object(g.jsx)(ae,{})}),Object(g.jsx)(x.a,{path:"/new-post",children:Object(g.jsx)(de,{})}),Object(g.jsx)(x.a,{path:"/register",children:Object(g.jsx)(me,{})}),Object(g.jsx)(x.a,{path:"/about",children:Object(g.jsx)(Ee,{})})]})]})})})},He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(g.jsx)(P.a,{basename:"/react-blog",children:Object(g.jsx)(x.c,{children:Object(g.jsx)(Ge,{})})}),document.getElementById("root")),He()}},[[39,1,2]]]);
//# sourceMappingURL=main.9a424b9d.chunk.js.map