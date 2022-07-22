"use strict";(self.webpackChunkatelier=self.webpackChunkatelier||[]).push([[775],{6636:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(5466),i=t(3823);function o(n){var e,t=n.imageUpload;return(0,r.useEffect)((function(){e=window.cloudinary.createUploadWidget({cloudName:"space-invaders",uploadPreset:"Atelier-space-invaders"},(function(n,e){!n&&e&&"success"===e.event&&(console.log("Done! Here is the image info: ",e.info),t(e.info.url))})),document.getElementById("upload_widget").addEventListener("click",(function(){e.open()}),!1)}),[]),(0,i.jsx)("button",{type:"button",id:"upload_widget",children:"Upload"})}},6656:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(5466),i=t(1225),o=t(3823);function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function l(n){var e,t,l=n.photos,u=(e=(0,r.useState)(!0),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(n){l=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return a(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=u[0],c=u[1];return(0,o.jsx)("div",{children:s?(0,o.jsx)("img",{src:l.url,alt:"imageOfLa",width:"100",height:"70",onClick:function(){return c(!1)}}):(0,o.jsx)(i.a,{src:l.url,alt:"imageOfLa",onClick:function(){return c(!0)}})})}},7775:(n,e,t)=>{t.r(e),t.d(e,{default:()=>In});var r,i,o,a,l,u=t(5466),s=t(6116),c=t(6656),d=t(8549);function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var p,h,m,y,g,b,x,j,v,w,O,S,A=d.ZP.button(r||(r=f(["\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity:0.4;\n"]))),P=d.ZP.div(i||(i=f(["\n  display: flex;\n  justify-content: space-between;\n  width: 18rem;\n  padding-right: 15px;\n\n"]))),E=d.ZP.div(o||(o=f(["\n  display: flex;\n  justify-content: space-between;\n  width: 25rem;\n  margin-top: -0.09em;\n  margin-bottom: 0.3em;\n"]))),C=d.ZP.button(a||(a=f(["\n  display: flex;\n  align-items: flex-end;\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity:0.4;\n"]))),k=d.ZP.button(l||(l=f(["\n  margin-left: 1rem;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity:0.4;\n"])));function q(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var Z=d.ZP.ul(p||(p=q(["\n  max-height: 600px;\n\n  width: 65%;\n  margin: 0 auto;\n  overflow-y: auto;\n  padding: 15px;\n  font-size: 14px;\n  background: glacier-white;\n  margin-bottom: -0.8rem;\n"]))),I=d.ZP.div(h||(h=q(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n"]))),_=d.ZP.li(m||(m=q(["\n  padding: 5px;\n  margin-bottom: 10px;\n  list-style: none;\n  border-bottom: 1px dashed;\n"]))),z=d.ZP.span(y||(y=q(["\n  padding-left: 2px;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity: 0.4;\n  "]))),D=d.ZP.div(g||(g=q(["\n  height: 250px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-right: 5px;\n  width: 98%;\n\n"]))),Q=d.ZP.li(b||(b=q(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n  margin-left: 5px;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 0.3rem;\n\n"]))),U=d.ZP.ul(x||(x=q(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  min-height: 40px;\n  padding: 5px;\n  width: 100%;\n\n"]))),N=d.ZP.div(j||(j=q(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 5px;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 0.3rem;\n"]))),L=d.ZP.span(v||(v=q(["\n  display: inline-block;\n  padding-left: 6px;\n  font-size:  15px;\n  font-weight: bold;\n"]))),T=d.ZP.div(w||(w=q(["\n  display: flex;\n  align-items: flex-start;\n  color: #007185;\n  font-size: 17px;\n  font-weight: bold;\n  margin-left: 10px;\n  width: 60%;\n  span {\n    margin-right: 10px;\n  }\n  p {\n    margin: 0;\n  }\n"]))),F=d.ZP.input(O||(O=q(["\n  width: 100%;\n  height: 4em;\n  padding: 1em;\n  margin: 0 auto;\n"]))),R=d.ZP.div(S||(S=q(["\n  max-height: 50px;\n  display: flex;\n  justify-content: flex-start;\n  margin: 0 auto;\n  width: 65%;\n  font-size: 15px;\n  padding: 1.5rem;\n  background: glacier-white;\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n  border-bottom 1px solid black;\n"]))),M=t(1225),W=t(3823);function $(n){var e=n.answer,t=n.helpfulness,r=n.report;console.log(e.date);var i=new Date(e.date.replace(/-/g,"/").replace(/T.+/,"")).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return(0,W.jsxs)(Q,{children:[(0,W.jsx)("p",{style:{margin:0},children:e.body}),0===e.photos.length?null:(0,W.jsxs)(M.L,{children:[" ",e.photos.map((function(n,e){return(0,W.jsx)(c.Z,{photos:n},e)}))," "]}),(0,W.jsxs)(E,{children:[(0,W.jsxs)("div",{children:["Seller"===e.answerer_name||"seller"===e.answerer_name?(0,W.jsxs)(z,{children:["by"," ",(0,W.jsx)("b",{children:"Seller"}),","," "]}):(0,W.jsxs)(z,{children:["by"," ",e.answerer_name,","," "]}),(0,W.jsx)(z,{children:"".concat(i)})]}),(0,W.jsx)("span",{style:{opacity:.5},children:"|"}),(0,W.jsxs)("div",{children:[(0,W.jsx)(A,{type:"button",onClick:function(){return t(e.answer_id)},children:"Helpful?"}),(0,W.jsx)(z,{children:"  Yes (".concat(e.helpfulness,")")})]}),(0,W.jsx)("span",{style:{opacity:.5},children:"|"}),(0,W.jsx)(A,{type:"button",onClick:function(){return r(e.answer_id)},children:"Report"})]})]})}var H=t(9768),V=t(6636);function Y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function J(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(t),!0).forEach((function(e){B(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function B(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function G(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(n){l=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,e)||K(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(n,e){if(n){if("string"==typeof n)return X(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?X(n,e):void 0}}function X(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t(4559);var nn={body:"",name:"",email:""};function en(n){var e=n.onFormValidation,t=G((0,u.useState)(nn),2),r=t[0],i=t[1],o=G((0,u.useState)([]),2),a=o[0],l=o[1],s=function(n){var e=n.target,t=e.name,o=e.value;console.log(n.target[t],n.target.value),i(J(J({},r),{},B({},t,o)))};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("h2",{children:"Submit an answer"}),(0,W.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=J(J({},r),{},{photos:a});e(t)},children:[(0,W.jsx)("div",{className:"text",children:(0,W.jsx)("input",{type:"text",name:"body",placeholder:"Enter an answer...",maxLength:"1000",size:"100",value:r.body,onChange:s,required:!0})}),(0,W.jsx)("div",{className:"name",children:(0,W.jsx)("input",{type:"text",name:"name",placeholder:"Enter a name",value:r.name,onChange:s})}),(0,W.jsx)("div",{className:"email",children:(0,W.jsxs)("label",{children:["Email",(0,W.jsx)("input",{type:"email",name:"email",placeholder:"Enter an email",value:r.email,onChange:s})]})}),(0,W.jsx)(V.Z,{imageUpload:function(n){l((function(e){return[].concat(function(n){if(Array.isArray(n))return X(n)}(t=e)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(t)||K(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[n]);var t}))}}),(0,W.jsx)("div",{children:(0,W.jsx)("input",{type:"submit",value:"Submit Answer"})})]})]})}function tn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(n){l=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,e)||function(n,e){if(n){if("string"==typeof n)return rn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?rn(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var on,an,ln,un,sn,cn,dn=t(4559);function fn(n){var e=n.question,t=n.helpfulness,r=n.reportQ,i=tn((0,u.useState)([]),2),o=i[0],a=i[1],l=tn((0,u.useState)([]),2),s=l[0],c=l[1],d=tn((0,u.useState)(2),2),f=d[0],p=d[1],h=tn((0,u.useState)(!1),2),m=h[0],y=h[1],g=tn((0,u.useState)(!1),2),b=g[0],x=g[1],j=tn((0,u.useState)(!1),2),v=j[0],w=j[1],O=tn((0,u.useState)(!1),2),S=O[0],E=O[1],k=tn((0,u.useState)(0),2),q=k[0],Z=k[1];(0,u.useEffect)((function(){dn.get("/questions/answers",{params:{question_id:e.question_id,page:1}}).then((function(n){var e=n.data;a(e.results),c(e.results.slice(0,f)),Z(e.results.length)})).catch((function(n){return console.log(n)}))}),[m,S,v]),(0,u.useEffect)((function(){c(o.slice(0,f))}),[f]);var Q=function(n){!1===JSON.parse(localStorage.getItem("helpfulDataA"))&&dn.put("/questions/answers/helpful/?answer_id=".concat(n)).then((function(){return y(!0)})).catch((function(n){return console.log(n)}))},F=function(n){JSON.parse(localStorage.getItem("reportAns")),!1===S&&dn.put("/questions/reportA/?answer_id=".concat(n)).then((function(){E(!0),alert("Answer has been reported")})).catch((function(n){return console.log(n)}))},R=function(){p(b?2:1e3),x(!b)};return(0,W.jsxs)("div",{children:[v?(0,W.jsx)(H.Z,{title:"This is the modal's title",description:"A short description of the modal's contents",isOpen:v,onCloseRequest:function(){w(!1)},children:(0,W.jsx)(en,{onFormValidation:function(n,t){dn.post("/questions/answers?question_id=".concat(e.question_id),n).then((function(){console.log("created")})).catch((function(){return alert("error")})),w(!1)}})}):null,(0,W.jsxs)(_,{style:{position:"relative"},children:[(0,W.jsxs)(I,{children:[(0,W.jsxs)(T,{children:[(0,W.jsx)("span",{children:"Q: "}),(0,W.jsx)("h4",{style:{margin:0},children:e.question_body})]}),(0,W.jsxs)(P,{children:[(0,W.jsxs)("div",{children:[(0,W.jsx)(A,{type:"button",onClick:function(){return t(e.question_id)},children:"Helpful?"}),(0,W.jsx)(z,{children:"Yes (".concat(e.question_helpfulness,")")})]}),(0,W.jsx)(z,{children:"|"}),(0,W.jsx)(A,{type:"button",onClick:function(){return r(e.question_id)},children:"Report"}),(0,W.jsx)(z,{children:"|"}),(0,W.jsx)(A,{type:"button",onClick:function(){return w(!0)},children:"Add Answer"})]})]}),(0,W.jsxs)(U,{children:[(0,W.jsx)(L,{children:"A: "}),(0,W.jsx)(N,{children:!0===b?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(D,{children:s.map((function(n){return(0,W.jsx)($,{helpfulness:Q,report:F,answer:n},n.answer_id)}))}),b?(0,W.jsx)(C,{type:"button",onClick:function(){return R()},children:"COLLAPSE"}):null]}):(0,W.jsx)(W.Fragment,{children:s.map((function(n,e){return(0,W.jsx)($,{helpfulness:Q,report:F,answer:n},e)}))})}),!b&&q>2?(0,W.jsx)(C,{type:"button",onClick:function(){return R()},children:"SEE MORE ANSWERS"}):null]})]})]})}function pn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function hn(n){var e,t,r=n.setSearch,i=n.allQuestions,o=(e=(0,u.useState)(""),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(n){l=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return pn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?pn(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],l=o[1];return(0,u.useEffect)((function(){!function(n){if(n.length>2){var e=i.filter((function(e){return e.question_body.toLowerCase().includes(n.toLowerCase())}));r(e)}else r([])}(a)}),[a]),(0,W.jsx)("div",{children:(0,W.jsx)(F,{type:"search","max-length":"150",autoComplete:"off",value:a,placeholder:"HAVE A QUESTION? SEARCH FOR ANSWERS...",onChange:function(n){l(n.target.value),console.log("hello")}})})}function mn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}d.ZP.div(on||(on=mn(['\n  position: fixed;\n  top: 10%;\n  left: 20%;\n  height: 70%;\n  width: 100%;\n  border-radius: 10px;\n  z-index: 10;\n  background: dodgerblue;\n  padding: 20px;\n\n  form {\n    margin-top: 30px;\n    width: 100%;\n    height: 60%;\n    position: absolute;\n    top: 15%;\n    left: 12%;\n    z-index: 11;\n\n    display: flex;\n    flex-direction: column;\n  }\n\n  input {\n    width: 30%;\n    height: 30px;\n    margin-bottom: 1em;\n    margin-top: 0.5em;\n    padding: 10px;\n  }\n  input[name="answer"] {\n    height: 80px;\n  }\n  input[type="submit"] {\n    width: 20%;\n    height: 40px;\n    margin-right: 30px;\n    margin-left: 40px;\n  }\n  input[type="button"] {\n    width: 20%;\n    height: 40px;\n    margin-right: 30px;\n\n  }\n\n'])));var yn=d.ZP.div(an||(an=mn(["\ninput {\n  width: 72%;\n  height: 4em;\n}\n"]))),gn=(d.ZP.div(ln||(ln=mn(["\n  text-align: center;\n  margin-bottom: 50px;\n"]))),d.ZP.div(un||(un=mn(["\n  display: flex;\n  flex-direction: row;\n\n  input {\n    width: 80%;\n    margin-bottom: -16px;\n  }\n\n  p {\n    width: 70%;\n    margin-bottom: 30px;\n  }\n"])))),bn=d.ZP.label(sn||(sn=mn(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"]))),xn=d.ZP.div(cn||(cn=mn(["\n  position: relative;\n  left: 10%;\n"])));function jn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function vn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?jn(Object(t),!0).forEach((function(e){wn(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):jn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function wn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function On(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Sn(n){var e,t,r=n.onFormValidation,i=(e=(0,u.useState)({body:"",name:"",email:""}),t=2,function(n){if(Array.isArray(n))return n}(e)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(n){l=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,t)||function(n,e){if(n){if("string"==typeof n)return On(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?On(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],a=i[1],l=function(n){var e=n.target,t=e.name,r=e.value;a(vn(vn({},o),{},wn({},t,r)))};return(0,W.jsxs)("form",{onSubmit:function(n){n.preventDefault(),console.log(o),r(o)},children:[(0,W.jsx)(yn,{children:(0,W.jsxs)(bn,{children:[(0,W.jsx)("span",{children:"Your Question *"}),(0,W.jsx)("input",{type:"text",name:"body",placeholder:"Enter your Question",maxLength:"1000",size:"100",value:o.body,onChange:l,required:!0})]})}),(0,W.jsxs)(gn,{children:[(0,W.jsxs)("div",{className:"name",children:[(0,W.jsxs)(bn,{children:[(0,W.jsx)("span",{children:"What is your nickname *"}),(0,W.jsx)("input",{type:"text",name:"name",placeholder:"Example: jackson11!",maxLength:"60",value:o.name,onChange:l,required:!0})]}),(0,W.jsx)("p",{children:"For privacy reasons, do not use your full name or email address"})]}),(0,W.jsxs)("div",{className:"email",children:[(0,W.jsxs)(bn,{children:[(0,W.jsx)("span",{children:"Your email *"}),(0,W.jsx)("input",{type:"email",name:"email",placeholder:"Why did you like the product or not?",value:o.email,onChange:l})]}),(0,W.jsx)("p",{children:"For authentication reasons, you will not be emailed"})]})]}),(0,W.jsxs)(xn,{children:[(0,W.jsx)("input",{type:"submit",value:"Submit Question"}),(0,W.jsx)("input",{type:"button",value:"close",onClick:function(){return setAddStatus(!1)}})]})]})}var An=t(4061);function Pn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function En(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Pn(Object(t),!0).forEach((function(e){Cn(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Pn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function Cn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(n){l=!0,i=n}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(n,e)||function(n,e){if(n){if("string"==typeof n)return qn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?qn(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var Zn=t(4559);function In(){var n=kn((0,u.useState)([]),2),e=n[0],t=n[1],r=kn((0,u.useState)([]),2),i=r[0],o=r[1],a=kn((0,u.useState)([]),2),l=a[0],c=a[1],d=kn((0,u.useState)(4),2),f=d[0],p=d[1],h=kn((0,u.useState)(2),2),m=h[0],y=h[1],g=kn((0,u.useState)(!1),2),b=g[0],x=g[1],j=(0,u.useContext)(An.I).name;function v(){Zn.get("/questions/questions",{params:{product_id:40344,page:1}}).then((function(n){var e=n.data;s.unstable_batchedUpdates((function(){y(e.length),o(e),t(e.slice(0,f))}))})).catch((function(n){return console.log(n)}))}(0,u.useEffect)((function(){v()}),[]),(0,u.useEffect)((function(){t(i.slice(0,f))}),[f]),(0,u.useEffect)((function(){t(l)}),[l]);var w,O=function(n){Zn.put("/questions/questions/helpful/?question_id=".concat(n)).then((function(){v()})).catch((function(n){return console.log(n)}))},S=function(n){Zn.put("questions/reportQ/?question_id=".concat(n)).then((function(){v(),alert("Question has been reported successfully")})).catch((function(n){return console.log(n)}))};return w=0===l.length&&void 0!==e?e.map((function(n){return(0,W.jsx)(fn,{helpfulness:O,reportQ:S,question:n},n.question_id)})):l.map((function(n){return(0,W.jsx)(fn,{helpfulness:O,reportQ:S,question:n},n.question_id)})),(0,W.jsxs)(W.Fragment,{children:[b?(0,W.jsx)(H.Z,{title:"Ask Your Question",description:"About ".concat(j),isOpen:b,onCloseRequest:function(){x(!1)},children:(0,W.jsx)(Sn,{onFormValidation:function(n){var e=En(En({},n),{},{product_id:40344});Zn.post("/questions/questions/",e).then((function(){return console.log("successful posting questions")})).catch((function(n){return console.log("failed to post question",n)})),x(!1)}})}):null,(0,W.jsx)(Z,{children:(0,W.jsx)(hn,{setSearch:c,allQuestions:i})}),(0,W.jsx)(Z,{children:w}),(0,W.jsxs)(R,{children:[0===l.length&&(m>f||e.length>4)?(0,W.jsxs)(k,{type:"button",onClick:function(){return p((function(n){return n+2}))},children:["SEE"," (".concat(m-f,")")," ","MORE ANSWERED QUESTIONS"]}):null,(0,W.jsx)(k,{type:"button",onClick:function(){return x(!0)},children:"ADD A QUESTION  +"})]})]})}},1225:(n,e,t)=>{t.d(e,{L:()=>l,a:()=>u});var r,i,o=t(8549);function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var l=o.ZP.div(r||(r=a(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  div {\n    padding-right: 20px;\n    width: 100px;\n  }\n  background: white;\n"]))),u=o.ZP.img(i||(i=a(["\n  position: fixed;\n  width: 50%;\n  height: 60%;\n  z-index: 3;\n  top: 20%;\n  left: 25%;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n"])))}}]);
//# sourceMappingURL=775.bundle.js.map