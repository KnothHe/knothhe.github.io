import{r as l}from"./index.5XC2200L.js";var p={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=l,c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,_=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,a){var t,n={},s=null,i=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)g.call(e,t)&&!m.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:c,type:r,key:s,ref:i,props:n,_owner:_.current}}o.Fragment=d;o.jsx=u;o.jsxs=u;p.exports=o;var y=p.exports;const E={editPost:{url:"https://github.com/knothhe/blog-astro/edit/main/src/content/blog",text:"Suggest Changes",appendFilePath:!0}},x={langTag:["zh-CN"]},O={repo:"knothhe/knothhe.github.io",repoId:"MDEwOlJlcG9zaXRvcnkxNjg2OTEzMzE=",category:"Announcements",categoryId:"DIC_kwDOCg4Gg84Cmwg5",mapping:"title",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"zh-CN",loading:"lazy"};export{O as G,x as L,E as S,y as j};
