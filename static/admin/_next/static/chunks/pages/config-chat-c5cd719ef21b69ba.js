(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var a=t(87462),s=t(4942),c=t(67294),i=t(97685),l=t(91),r=t(94184),o=t.n(r),u=t(21770),d=t(15105),f=c.forwardRef((function(e,n){var t,a=e.prefixCls,r=void 0===a?"rc-switch":a,f=e.className,h=e.checked,m=e.defaultChecked,g=e.disabled,v=e.loadingIcon,p=e.checkedChildren,b=e.unCheckedChildren,C=e.onClick,x=e.onChange,N=e.onKeyDown,k=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),y=(0,u.Z)(!1,{value:h,defaultValue:m}),j=(0,i.Z)(y,2),w=j[0],E=j[1];function Z(e,n){var t=w;return g||(E(t=e),null===x||void 0===x||x(t,n)),t}var O=o()(r,f,(t={},(0,s.Z)(t,"".concat(r,"-checked"),w),(0,s.Z)(t,"".concat(r,"-disabled"),g),t));return c.createElement("button",Object.assign({},k,{type:"button",role:"switch","aria-checked":w,disabled:g,className:O,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?Z(!1,e):e.which===d.Z.RIGHT&&Z(!0,e),null===N||void 0===N||N(e)},onClick:function(e){var n=Z(!w,e);null===C||void 0===C||C(n,e)}}),v,c.createElement("span",{className:"".concat(r,"-inner")},w?p:b))}));f.displayName="Switch";var h=f,m=t(50888),g=t(68349),v=t(59844),p=t(97647),b=t(21687),C=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]])}return t},x=c.forwardRef((function(e,n){var t,i=e.prefixCls,l=e.size,r=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,x=C(e,["prefixCls","size","loading","className","disabled"]);(0,b.Z)("checked"in x||!("value"in x),"Switch","`value` is not a valid prop, do you mean `checked`?");var N=c.useContext(v.E_),k=N.getPrefixCls,y=N.direction,j=c.useContext(p.Z),w=k("switch",i),E=c.createElement("div",{className:"".concat(w,"-handle")},r&&c.createElement(m.Z,{className:"".concat(w,"-loading-icon")})),Z=o()((t={},(0,s.Z)(t,"".concat(w,"-small"),"small"===(l||j)),(0,s.Z)(t,"".concat(w,"-loading"),r),(0,s.Z)(t,"".concat(w,"-rtl"),"rtl"===y),t),d);return c.createElement(g.Z,{insertExtraNode:!0},c.createElement(h,(0,a.Z)({},x,{prefixCls:w,className:Z,disabled:f||r,ref:n,loadingIcon:E})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var N=x},20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var a=t(4942),s=t(87462),c=t(97685),i=t(67294),l=t(94184),r=t.n(l),o=t(98423),u=t(97937),d=t(59844),f=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]])}return t},h=function(e){var n,t=e.prefixCls,c=e.className,l=e.checked,o=e.onChange,u=e.onClick,h=f(e,["prefixCls","className","checked","onChange","onClick"]),m=(0,i.useContext(d.E_).getPrefixCls)("tag",t),g=r()(m,(n={},(0,a.Z)(n,"".concat(m,"-checkable"),!0),(0,a.Z)(n,"".concat(m,"-checkable-checked"),l),n),c);return i.createElement("span",(0,s.Z)({},h,{className:g,onClick:function(e){null===o||void 0===o||o(!l),null===u||void 0===u||u(e)}}))},m=t(98787),g=t(68349),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]])}return t},p=new RegExp("^(".concat(m.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(m.E.join("|"),")$")),C=function(e,n){var t,l=e.prefixCls,f=e.className,h=e.style,m=e.children,C=e.icon,x=e.color,N=e.onClose,k=e.closeIcon,y=e.closable,j=void 0!==y&&y,w=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=i.useContext(d.E_),Z=E.getPrefixCls,O=E.direction,S=i.useState(!0),P=(0,c.Z)(S,2),U=P[0],I=P[1];i.useEffect((function(){"visible"in w&&I(w.visible)}),[w.visible]);var _=function(){return!!x&&(p.test(x)||b.test(x))},M=(0,s.Z)({backgroundColor:x&&!_()?x:void 0},h),T=_(),D=Z("tag",l),J=r()(D,(t={},(0,a.Z)(t,"".concat(D,"-").concat(x),T),(0,a.Z)(t,"".concat(D,"-has-color"),x&&!T),(0,a.Z)(t,"".concat(D,"-hidden"),!U),(0,a.Z)(t,"".concat(D,"-rtl"),"rtl"===O),t),f),A=function(e){e.stopPropagation(),null===N||void 0===N||N(e),e.defaultPrevented||"visible"in w||I(!1)},F="onClick"in w||m&&"a"===m.type,R=(0,o.Z)(w,["visible"]),z=C||null,L=z?i.createElement(i.Fragment,null,z,i.createElement("span",null,m)):m,K=i.createElement("span",(0,s.Z)({},R,{ref:n,className:J,style:M}),L,j?k?i.createElement("span",{className:"".concat(D,"-close-icon"),onClick:A},k):i.createElement(u.Z,{className:"".concat(D,"-close-icon"),onClick:A}):null);return F?i.createElement(g.Z,null,K):K},x=i.forwardRef(C);x.displayName="Tag",x.CheckableTag=h;var N=x},44716:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-chat",function(){return t(90610)}])},10063:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Z:function(){return d}});var a=t(85893),s=t(67294),c=t(84485),i=t(20550),l=t(48419),r=t(78464),o=c.Z.Title,u="#5a67d8";function d(e){var n=(0,s.useState)(""),t=n[0],c=n[1],d=e.title,f=e.description,h=e.placeholder,m=e.maxLength,g=e.values,v=e.handleDeleteIndex,p=e.handleCreateString,b=e.submitStatus,C=e.continuousStatusMessage;return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(o,{level:3,className:"section-title",children:d}),(0,a.jsx)("p",{className:"description",children:f}),(0,a.jsx)("div",{className:"edit-current-strings",children:null===g||void 0===g?void 0:g.map((function(e,n){return(0,a.jsx)(i.Z,{closable:!0,onClose:function(){v(n)},color:u,children:e},"tag-".concat(e,"-").concat(n))}))}),C&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(r.Z,{status:C})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(l.ZP,{fieldName:"string-input",value:t,onChange:function(e){var n=e.value;c(n)},onPressEnter:function(){var e=t.trim();p(e),c("")},maxLength:m,placeholder:h,status:b})})]})}d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},15976:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(34051),s=t.n(a),c=t(85893),i=t(67294),l=t(94594),r=t(83200),o=t(78464),u=t(25964),d=t(35159);function f(e,n,t,a,s,c,i){try{var l=e[c](i),r=l.value}catch(o){return void t(o)}l.done?n(r):Promise.resolve(r).then(a,s)}function h(e){var n=(0,i.useState)(null),t=n[0],a=n[1],h=null,m=((0,i.useContext)(d.aC)||{}).setFieldInConfigState,g=e.apiPath,v=e.checked,p=e.reversed,b=void 0!==p&&p,C=e.configPath,x=void 0===C?"":C,N=e.disabled,k=void 0!==N&&N,y=e.fieldName,j=e.label,w=e.tip,E=e.useSubmit,Z=e.onChange,O=function(){a(null),clearTimeout(h),h=null},S=function(){var e,n=(e=s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=6;break}return a((0,r.kg)(r.Jk)),t=b?!n:n,e.next=5,(0,u.Si)({apiPath:g,data:{value:t},onSuccess:function(){m({fieldName:y,value:t,path:x}),a((0,r.kg)(r.zv))},onError:function(e){a((0,r.kg)(r.Un,"There was an error: ".concat(e)))}});case 5:h=setTimeout(O,u.sI);case 6:Z&&Z(n);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,s){var c=e.apply(n,t);function i(e){f(c,a,s,i,l,"next",e)}function l(e){f(c,a,s,i,l,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}(),P=null!==t&&t.type===r.Jk;return(0,c.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[j&&(0,c.jsx)("div",{className:"label-side",children:(0,c.jsx)("span",{className:"formfield-label",children:j})}),(0,c.jsxs)("div",{className:"input-side",children:[(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)(l.Z,{className:"switch field-".concat(y),loading:P,onChange:S,defaultChecked:v,checked:v,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:k}),(0,c.jsx)(o.Z,{status:t})]}),(0,c.jsx)("p",{className:"field-tip",children:w})]})]})}h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},90610:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var a=t(85893),s=t(84485),c=t(67294),i=t(48419),l=t(50197),r=t(15976),o=t(10063),u=t(83200),d=t(25964),f=t(35159);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){h(e,n,t[n])}))}return e}function g(){var e,n=function(){y(null)},t=function(){(0,d.Si)({apiPath:d.CJ,data:{value:C.forbiddenUsernames},onSuccess:function(){S({fieldName:"forbiddenUsernames",value:C.forbiddenUsernames}),y(u.zv),setTimeout(n,d.sI)},onError:function(e){y((0,u.kg)(u.Un,e)),setTimeout(n,d.sI)}})},g=function(){E(null)},v=function(){(0,d.Si)({apiPath:d.cf,data:{value:C.suggestedUsernames},onSuccess:function(){S({fieldName:"suggestedUsernames",value:C.suggestedUsernames}),E(u.zv),setTimeout(g,d.sI)},onError:function(e){y((0,u.kg)(u.Un,e)),setTimeout(g,d.sI)}})},p=s.Z.Title,b=(0,c.useState)(null),C=b[0],x=b[1],N=(0,c.useState)(null),k=N[0],y=N[1],j=(0,c.useState)(null),w=j[0],E=j[1],Z=(0,c.useContext)(f.aC)||{},O=Z.serverConfig,S=Z.setFieldInConfigState,P=O.chatDisabled,U=O.chatJoinMessagesEnabled,I=O.forbiddenUsernames,_=O.instanceDetails,M=O.suggestedUsernames,T=O.chatEstablishedUserMode,D=_.welcomeMessage,J=function(e){var n=e.fieldName,t=e.value;x(m({},C,h({},n,t)))};return(0,c.useEffect)((function(){x({chatDisabled:P,chatJoinMessagesEnabled:U,forbiddenUsernames:I,suggestedUsernames:M,welcomeMessage:D,chatEstablishedUserMode:T})}),[O]),C?(0,a.jsxs)("div",{className:"config-server-details-form",children:[(0,a.jsx)(p,{children:"Chat Settings"}),(0,a.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,a.jsx)(r.Z,m({fieldName:"chatDisabled"},d.yj,{checked:!C.chatDisabled,reversed:!0,onChange:function(e){J({fieldName:"chatDisabled",value:!e})}})),(0,a.jsx)(r.Z,m({fieldName:"chatJoinMessagesEnabled"},d.kB,{checked:C.chatJoinMessagesEnabled,onChange:function(e){J({fieldName:"chatJoinMessagesEnabled",value:e})}})),(0,a.jsx)(r.Z,m({fieldName:"establishedUserMode"},d.dj,{checked:C.chatEstablishedUserMode,onChange:function(e){J({fieldName:"chatEstablishedUserMode",value:e})}})),(0,a.jsx)(l.ZP,m({fieldName:"welcomeMessage"},d.IX,{type:i.Sk,value:C.welcomeMessage,initialValue:D,onChange:J})),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Z,{title:d.Dg.label,placeholder:d.Dg.placeholder,description:d.Dg.tip,values:C.forbiddenUsernames,handleDeleteIndex:function(e){C.forbiddenUsernames.splice(e,1),t()},handleCreateString:function(e){C.forbiddenUsernames.push(e),J({fieldName:"forbiddenUsernames",value:C.forbiddenUsernames}),t()},submitStatus:(0,u.kg)(k)}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Z,{title:d.AN.label,placeholder:d.AN.placeholder,description:d.AN.tip,values:C.suggestedUsernames,handleDeleteIndex:function(e){C.suggestedUsernames.splice(e,1),v()},handleCreateString:function(e){C.suggestedUsernames.push(e),J({fieldName:"suggestedUsernames",value:C.suggestedUsernames}),v()},submitStatus:(0,u.kg)(w),continuousStatusMessage:(e=C.suggestedUsernames.length,0===e?(0,u.kg)("success",d.AN.no_entries):e>0&&e<10?(0,u.kg)("warning",d.AN.min_not_reached):null)})]})]}):null}}},function(e){e.O(0,[774,888,179],(function(){return n=44716,e(e.s=n);var n}));var n=e.O();_N_E=n}]);