(this["webpackJsonpkwitter-starter"]=this["webpackJsonpkwitter-starter"]||[]).push([[0],{50:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22),s=n.n(c),o=(n(50),n(7)),i=n(8),j=(n(34),n(18)),u=n(6),l=n(23),d=n.n(l),b=n(40),h="https://socialapp-api.herokuapp.com/",O=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){var a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"users",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:t,displayName:n,password:r})});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("bad response",a);case 5:return c=a,e.next=8,c.json();case 8:return s=e.sent,e.abrupt("return",console.log(s));case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(e){return fetch(h+"users/".concat(e)).then((function(e){return e.json()}))},x=n(9),p=n(71),f=n(67),g=n(41),v=n(36),y="LOGIN",w="GET_MESSAGES",k="LIKE",S=Object(g.a)(Object(v.devtools)(Object(v.redux)((function(e,t){switch(t.type){case y:return{user:t.payload};case"LOGOUT":return{user:{}};case w:return Object(o.a)(Object(o.a)({},e),{},{messages:t.payload});case k:return Object(o.a)(Object(o.a)({},e),{},{like:t.payload});default:return e}}),{user:{token:""},messages:[]})),{name:"storage"}),C=n(1);var N=function(e){var t=S((function(e){return e.dispatch})),n=Object(r.useState)({username:"",password:""}),a=Object(u.a)(n,2),c=a[0],s=a[1],i=S((function(e){return e.user})),l=function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t,n))}))};function d(e){console.log(e)}return Object(r.useEffect)((function(){return window.addEventListener("message",d),function(){window.removeEventListener("message",d)}}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(p.a,{onSubmit:function(e){var n,r;e.preventDefault(),(n=c.username,r=c.password,fetch(h+"auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:r})}).then((function(e){return e.json()}))).then((function(e){t({type:y,payload:e}),window.localStorage.setItem("user",JSON.stringify(e))}))},children:[Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Username"}),Object(C.jsx)(p.a.Control,{name:"username",type:"text",placeholder:"username",value:c.username,required:!0,onChange:l})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(C.jsx)(p.a.Label,{children:"Password"}),Object(C.jsx)(p.a.Control,{name:"password",type:"password",placeholder:"Password",value:c.password,required:!0,onChange:l})]}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"}),Object(C.jsx)("br",{}),Object(C.jsx)("div",{children:i.message?i.message:""}),Object(C.jsx)("button",{onClick:function(e){var n=window.open(h+"auth/google/login","_blank","width=350,height=350");n.window.opener.onmessage=function(e){e&&e.data&&e.data.token&&(n.close(),t({type:y,payload:e.data}))}},children:"Google Login"}),Object(C.jsx)("br",{}),Object(C.jsxs)("label",{children:["New User?",Object(C.jsx)(x.b,{to:"/registration",children:"Click here!"})]})]})})},T=n(70),L=n(72);var E=function(e){var t=S((function(e){return e.user})),n=S((function(e){return e.dispatch}));return Object(C.jsx)("div",{children:Object(C.jsxs)(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(C.jsx)(T.a.Brand,{href:"/",children:"Home"}),Object(C.jsx)(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(C.jsxs)(T.a.Collapse,{id:"responsive-navbar-nav",children:[Object(C.jsxs)(L.a,{className:"mr-auto",children:[Object(C.jsx)(L.a.Link,{children:Object(C.jsx)(x.b,{to:"/messages",children:"Messages"})}),Object(C.jsx)(L.a.Link,{children:Object(C.jsx)(x.b,{to:"profile/".concat(t.username),children:"Profile"})}),Object(C.jsx)(L.a.Link,{children:Object(C.jsx)(x.b,{to:"/users",children:"Members"})})]}),t.token&&Object(C.jsx)(f.a,{variant:"warning",onClick:function(e){var r;(r=t.token,fetch(h+"auth/logout",{headers:{Authorization:"Bearer "+r}}).then((function(e){return e.json()}))).then((function(){return n({type:"LOGOUT"})})),window.localStorage.clear()},children:"Logout"})]})]})})};var B=function(e){var t=S((function(e){return e.user}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(E,{}),Object(C.jsx)("h2",{children:"Your favorite microblogging platform"}),!t.token&&Object(C.jsx)(N,{})]})},A=n(73),G=n(16),D=n.n(G),Y=n(68),M=n(45),I=function(e){var t=e.match,n=Object(r.useState)({}),a=Object(u.a)(n,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){m(t.params.username).then((function(e){return s(e.user)}))}),[]),Object(C.jsxs)("div",{children:[Object(C.jsx)(E,{}),Object(C.jsxs)(A.a,{style:{width:"18rem"},children:[Object(C.jsxs)(A.a.Body,{children:[Object(C.jsxs)(A.a.Title,{children:["Username: ",c.username]}),Object(C.jsxs)(A.a.Title,{children:["display Name: ",c.displayName]})]}),Object(C.jsxs)(Y.a,{className:"list-group-flush",children:[Object(C.jsxs)(M.a,{children:["Created On:",D()(c.createdAt).format("MM-DD-YYYY")]}),Object(C.jsxs)(M.a,{children:["Updated on:",D()(c.updatedAt).format("MM-DD-YYYY")]}),Object(C.jsxs)(M.a,{children:["Google ID: ",c.googleId]})]}),Object(C.jsxs)(A.a.Body,{children:["About ",c.displayName,": ",c.about]}),Object(C.jsx)(f.a,{variant:"dark",href:"/users",children:"Go Back"})]})]})},P=function(e){var t=e.match,n=Object(r.useState)({}),a=Object(u.a)(n,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){var e;(e=t.params.id,fetch(h+"messages/".concat(e)).then((function(e){return e.json()}))).then((function(e){return s(e.message)})).then((function(){return console.log(c)}))}),[]),Object(C.jsx)("h1",{children:Object(C.jsxs)(A.a,{style:{width:"18rem"},children:[Object(C.jsxs)(A.a.Body,{children:[Object(C.jsxs)(A.a.Title,{children:["Created By: ",c.username]}),Object(C.jsxs)(A.a.Title,{children:["Created On: ",D()(c.createdAt).format("MM-DD-YYYY")]})]}),Object(C.jsxs)(Y.a,{className:"list-group-flush",children:[Object(C.jsx)(M.a,{children:c.text}),Object(C.jsx)(f.a,{href:"/messages",children:"Go Back"})]})]})})};var U=function(e){var t=S((function(e){return e.dispatch})),n=S((function(e){return e.user})),r=e.likes;return Object(C.jsx)("div",{children:Object(C.jsx)(A.a,{style:{width:"18rem"},children:Object(C.jsxs)(A.a.Body,{children:[Object(C.jsx)(A.a.Title,{children:e.username}),Object(C.jsx)(A.a.Subtitle,{className:"mb-2 text-muted",children:D()(e.createdAt).format("MM-DD-YYYY")}),Object(C.jsx)(A.a.Text,{children:e.text}),Object(C.jsxs)(A.a.Text,{children:["Likes: ",e.likes.length]}),Object(C.jsx)(A.a.Link,{to:"#",children:Object(C.jsx)(x.b,{to:"users/".concat(e.username),render:function(e){return Object(C.jsx)(I,Object(o.a)({},e))},children:"Go to User Info"})}),Object(C.jsx)(A.a.Link,{to:"#",children:Object(C.jsx)(x.b,{to:"messages/".concat(e.id),render:function(e){return Object(C.jsx)(P,Object(o.a)({},e))},children:"Go to message"})}),n.username===e.username?Object(C.jsx)(f.a,{variant:"danger",onClick:function(t){var r,a;r=n.token,a=e.id,fetch(h+"messages/".concat(a),{method:"DELETE",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},Body:JSON.stringify({messageId:a})}).then((function(e){return e.json()}))},children:"Delete"}):Object(C.jsx)(f.a,{className:"Likes",onClick:function(a){var c,s;(c=n.token,s=e.id,fetch(h+"likes",{method:"POST",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"},body:JSON.stringify({messageId:s})}).then((function(e){return e.json()}))).then((function(e){"Like already exists"===e.message&&r.filter((function(e){if(e.username===n.username){var t=e.id;!function(e,t){fetch("".concat(h,"likes/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},Body:JSON.stringify({id:t})}).then((function(e){return e.json()}))}(n.token,t)}})),t({type:k,payload:e})}))},children:"like/Unlike"})]})})})},J=function(e){var t=S((function(e){return e.user})),n=Object(r.useState)({text:""}),a=Object(u.a)(n,2),c=a[0],s=a[1];return Object(C.jsxs)("div",{children:[Object(C.jsxs)(p.a,{onSubmit:function(e){var n,r;e.preventDefault(),(n=t.token,r=c.text,fetch(h+"messages",{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({text:r})}).then((function(e){return e.json()}))).then(console.log(c.text))},children:[Object(C.jsxs)(p.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(C.jsx)(p.a.Label,{children:"Type your message here:"}),Object(C.jsx)(p.a.Control,{name:"text",as:"textarea",rows:3,onChange:function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t,n))}))},value:c.text})]}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(C.jsx)("br",{})]})};var z=function(e){var t=S((function(e){return e.dispatch})),n=S();return Object(r.useEffect)((function(){fetch(h+"messages").then((function(e){return e.json()})).then((function(e){t({type:w,payload:e.messages})}))}),[t,n.messages]),Object(r.useEffect)((function(){console.log(window.localStorage),window.localStorage.user||(window.location.href="/")}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(E,{}),Object(C.jsx)(J,{}),Object(C.jsx)("section",{className:"Messages",children:Object(C.jsx)("ul",{className:"MessageList",children:n.messages&&n.messages.map((function(e){return Object(C.jsx)(U,{id:e.id,text:e.text,username:e.username,createdAt:e.createdAt,likes:e.likes})}))})})]})})};var F=function(e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("p",{children:["Page not found for ",e.location.pathname]}),Object(C.jsx)(x.b,{to:"/",children:"Go Home"})]})},q=(n(64),function(e){return e.trigger?Object(C.jsx)("div",{className:"popup",children:Object(C.jsxs)("div",{className:"popup-inner",children:[Object(C.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:Object(C.jsx)(x.b,{to:"/",children:"Return to Login"})}),e.children]})}):""});var H=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)({username:"",displayName:"",password:""}),i=Object(u.a)(s,2),l=i[0],d=i[1],b=function(e){var t=e.target.name,n=e.target.value;d((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},t,n))}))};return Object(C.jsxs)("div",{children:[Object(C.jsxs)(p.a,{onSubmit:function(e){e.preventDefault(),O(l.username,l.displayName,l.password).then((function(){return c(!0)})).catch((function(){alert("Username may already be taken")}))},children:[Object(C.jsxs)(p.a.Group,{children:[Object(C.jsx)(p.a.Label,{children:"Username"}),Object(C.jsx)(p.a.Control,{name:"username",type:"text",placeholder:"username",onChange:b,value:l.username,required:!0})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Display Name"}),Object(C.jsx)(p.a.Control,{name:"displayName",type:"text",placeholder:"display name",value:l.displayName,required:!0,onChange:b})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(C.jsx)(p.a.Label,{children:"Password"}),Object(C.jsx)(p.a.Control,{name:"password",type:"password",placeholder:"Password",value:l.password,required:!0,onChange:b})]}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(C.jsx)(q,{trigger:a,setTrigger:c,children:Object(C.jsx)("h3",{children:"Welcome ".concat(l.username,", to the forum.")})})]})},_=n(69);var K=function(e){var t=e.match,n=S((function(e){return e.user})),a=Object(r.useState)({}),c=Object(u.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(""),j=Object(u.a)(i,2),l=j[0],d=j[1],b=Object(r.useState)(""),O=Object(u.a)(b,2),x=O[0],g=O[1],v=Object(r.useState)(""),y=Object(u.a)(v,2),w=y[0],k=y[1],N=Object(r.useState)(""),T=Object(u.a)(N,2),L=T[0],B=T[1],A=Object(r.useState)(!0),G=Object(u.a)(A,2),D=G[0],Y=G[1];return Object(r.useEffect)((function(){m(t.params.username).then((function(e){o(e.user),d(e.user.displayName),g(e.user.about),k(e.user.createdAt)}))}),[D]),Object(r.useEffect)((function(){console.log(window.localStorage),window.localStorage.user||(window.location.href="/")}),[]),console.log(s),Object(C.jsxs)("div",{children:[Object(C.jsx)(E,{}),Object(C.jsxs)(_.a,{className:"Profile",children:[Object(C.jsxs)("h1",{children:[n.username,"'s Profile"]}),Object(C.jsx)("input",{type:"file",onChange:function(e){return B(e.target.files[0])}}),Object(C.jsx)("button",{onClick:function(e){(function(e,t,n){var r=new FormData;return r.append("picture",n),fetch(h+"users/".concat(e,"/picture"),{method:"PUT",headers:{Authorization:"Bearer "+t},body:r})})(n.username,n.token,L).then((function(e){Y((function(e){return!e})),console.log(e)}))},children:"Upload"}),Object(C.jsx)("img",{src:"https://socialapp-api.herokuapp.com"+s.pictureLocation}),Object(C.jsx)("p",{children:"About Me:"}),Object(C.jsx)("p",{children:n.about}),Object(C.jsxs)(p.a,{onSubmit:function(e){e.preventDefault();var t={about:x,displayName:l};(function(e,t,n){return fetch(h+"users/".concat(t),{method:"PATCH",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))})(n.token,n.username,t).then((function(e){console.log(e),o(e.user)}))},children:[Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Display Name"}),Object(C.jsx)(p.a.Control,{onChange:function(e){return d(e.target.value)},value:l,type:"text",placeholder:"My displayname"})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"About Me"}),Object(C.jsx)(p.a.Control,{onChange:function(e){return g(e.target.value)},value:x,type:"text",placeholder:"About me..."})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Profile Created"}),Object(C.jsx)(p.a.Control,{value:w,type:"text",placeholder:"Created..."})]}),Object(C.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})]})]})},R=function(e){var t=e.user;return Object(C.jsx)("div",{children:Object(C.jsx)(A.a,{style:{width:"18rem"},children:Object(C.jsxs)(A.a.Body,{children:[Object(C.jsx)(A.a.Title,{children:t.displayName}),Object(C.jsxs)(A.a.Text,{children:["Username: ",t.username]}),Object(C.jsx)(A.a.Text,{children:D()(t.createdAt).format("MM-DD-YYYY")}),Object(C.jsx)(f.a,{variant:"dark",children:Object(C.jsx)(x.b,{to:"users/".concat(t.username),render:function(e){return Object(C.jsx)(I,Object(o.a)({},e))},children:"Go to User Info"})})]})})})},W=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){fetch(h+"users").then((function(e){return e.json()})).then((function(e){return a(e.users)}))}),[]),Object(C.jsxs)("div",{children:[Object(C.jsx)(E,{}),Object(C.jsx)("h1",{children:"Members List"}),n.map((function(e){return Object(C.jsx)(R,{user:e},e.username)}))]})};var Q=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{exact:!0,path:"/",component:B}),Object(C.jsx)(i.a,{exact:!0,path:"/messages",component:z}),Object(C.jsx)(i.a,{exact:!0,path:"/messages/:id",render:function(e){return Object(C.jsx)(P,Object(o.a)({},e))}}),Object(C.jsx)(i.a,{exact:!0,path:"/users",component:W}),Object(C.jsx)(i.a,{exact:!0,path:"/users/:username",render:function(e){return Object(C.jsx)(I,Object(o.a)({},e))}}),Object(C.jsx)(i.a,{exact:!0,path:"/registration",component:H}),Object(C.jsx)(i.a,{exact:!0,path:"/profile",component:K}),Object(C.jsx)(i.a,{exact:!0,path:"/profile/:username",component:K}),Object(C.jsx)(i.a,{component:F})]})})};s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(x.a,{basename:"/<kwitter-starter\r\n>",children:Object(C.jsx)(Q,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.48e9ba0c.chunk.js.map