import{w as l}from"./with-props-BIn-0Sdf.js";import{l as e,O as c,r as o,n}from"./chunk-GNGMS2XR-2bPrQtgl.js";function r(){const[i,s]=o.useState(!1),t=o.useCallback(()=>{s(!i)},[s,i]);return e.jsxs("div",{className:"loginbtm",onClick:t,id:i?"open-login":"close-login",children:[e.jsx("p",{children:"管理员登录"}),e.jsxs("form",{action:"",children:[e.jsx("input",{type:"password",placeholder:"key",onClick:a=>a.stopPropagation()}),e.jsx("button",{type:"submit",value:"",onClick:a=>a.stopPropagation(),children:e.jsx("i",{class:"fa fa-sign-in","aria-hidden":"true"})})]})]})}function d(){const[i,s]=o.useState(null);return o.useEffect(()=>{const t=window.location.pathname.split("/")[1];t===""&&(window.location.href="/"),s(t)},[]),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx(n,{to:"/",children:e.jsxs("li",{className:"home",onClick:()=>s("home"),id:i==="home"?"active":"",children:[e.jsx("i",{class:"fa fa-home","aria-hidden":"true"}),"主页"]})}),e.jsx(n,{to:"/project",children:e.jsxs("li",{className:"project",onClick:()=>s("project"),id:i==="project"?"active":"",children:[e.jsx("i",{class:"fa fa-code","aria-hidden":"true"}),"项目"]})}),e.jsx(n,{to:"/blog",children:e.jsxs("li",{className:"blog",onClick:()=>s("blog"),id:i==="blog"?"active":"",children:[e.jsx("i",{class:"fa fa-book","aria-hidden":"true"}),"博客"]})}),e.jsx(n,{to:"/picture",className:"picture",children:e.jsxs("li",{onClick:()=>s("picture"),id:i==="picture"?"active":"",children:[e.jsx("i",{class:"fa fa-picture-o","aria-hidden":"true"}),"相册"]})})]})})}const x=l(function(){return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(r,{}),e.jsx(c,{})]})});export{x as default};
