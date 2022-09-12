"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2877],{72877:function(e,n,a){a.d(n,{h:function(){return C}});var t=a(47568),s=a(14924),l=a(26042),i=a(69396),c=a(29815),o=a(70655),r=a(85893),u=a(67294),d=a(84485),f=a(71577),m=a(69677),p=a(10355),h=a(85402),x=a(48689),j=a(38939),v=a(58827),N=a(25964),k=function(e){var n=e.iconList,a=e.selectedOption,t=e.onSelected,s=""===a?null:a;return(0,r.jsxs)("div",{className:"social-dropdown-container",children:[(0,r.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,r.jsxs)("div",{className:"formfield-container",children:[(0,r.jsx)("div",{className:"label-side",children:(0,r.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,r.jsx)("div",{className:"input-side",children:(0,r.jsxs)(j.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:s,value:s,onSelect:function(e){t&&t(e)},children:[n.map((function(e){var n=e.platform,a=e.icon,t=e.key,s="".concat(v.WB).concat(a.slice(1));return(0,r.jsxs)(j.Z.Option,{className:"social-option",value:t,children:[(0,r.jsx)("span",{className:"option-icon",children:(0,r.jsx)("img",{src:s,alt:"",className:"option-icon"})}),(0,r.jsx)("span",{className:"option-label",children:n})]},"platform-".concat(t))})),(0,r.jsx)(j.Z.Option,{className:"social-option",value:N.z_,children:"Other..."},"platform-".concat(N.z_))]})})]})]})},Z=a(35159),b=a(19411),g=a(24389),y=a(83192),S=a(25521),w=d.Z.Title,C=function(){var e=(0,u.useState)([]),n=e[0],a=e[1],d=(0,u.useState)([]),j=d[0],C=d[1],_=(0,u.useState)(!1),E=_[0],O=_[1],z=(0,u.useState)(!1),I=z[0],T=z[1],H=(0,u.useState)(!1),L=H[0],A=H[1],B=(0,u.useState)(-1),P=B[0],U=B[1],D=(0,u.useState)(N.wC),V=D[0],W=D[1],F=(0,u.useState)(null),K=F[0],Q=F[1],R=(0,u.useContext)(Z.aC)||{},Y=R.serverConfig,$=R.setFieldInConfigState,q=Y.instanceDetails,G=q.socialHandles,J=null,M=function(){var e=(0,t.Z)((function(){var e,n,t,s;return(0,o.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n={},[4,(0,v.rQ)(v.$i,(n.auth=!1,n))];case 1:return e=i.sent(),t=Object.keys(e).map((function(n){return(0,l.Z)({key:n},e[n])})),a(t),[3,3];case 2:return s=i.sent(),console.log(s),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),X=function(e){return n.find((function(n){return n.key===e}))||!1},ee=""!==V.platform&&!n.find((function(e){return e.key===V.platform}));(0,u.useEffect)((function(){M()}),[]),(0,u.useEffect)((function(){q.socialHandles&&C(G)}),[q]);var ne=function(){Q(null),J=null,clearTimeout(J)},ae=function(){O(!1),U(-1),T(!1),A(!1),W((0,l.Z)({},N.wC))},te=function(){ae()},se=function(e,n){W((0,i.Z)((0,l.Z)({},V),(0,s.Z)({},e,n)))},le=function(){var e=(0,t.Z)((function(e){var n;return(0,o.__generator)(this,(function(a){switch(a.label){case 0:return n={},[4,(0,N.Si)((n.apiPath=N.c9,n.data={value:e},n.onSuccess=function(){$({fieldName:"socialHandles",value:e,path:"instanceDetails"}),A(!1),te(),Q((0,y.kg)(y.zv)),J=setTimeout(ne,N.sI)},n.onError=function(e){Q((0,y.kg)(y.Un,"There was an error: ".concat(e))),A(!1),J=setTimeout(ne,N.sI)},n))];case 1:return a.sent(),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),ie=[{title:"Social Link",dataIndex:"",key:"combo",render:function(e,n){var a=n.platform,t=n.url,s=X(a);if(!s)return(0,r.jsx)("div",{className:"social-handle-cell",children:(0,r.jsxs)("p",{className:"option-label",children:[(0,r.jsx)("strong",{children:a}),(0,r.jsx)("span",{className:"handle-url",title:t,children:t})]})});var l=s.icon,i=s.platform,c="".concat(v.WB).concat(l.slice(1));return(0,r.jsxs)("div",{className:"social-handle-cell",children:[(0,r.jsx)("span",{className:"option-icon",children:(0,r.jsx)("img",{src:c,alt:"",className:"option-icon"})}),(0,r.jsxs)("p",{className:"option-label",children:[(0,r.jsx)("strong",{children:i}),(0,r.jsx)("span",{className:"handle-url",title:t,children:t})]})]})}},{title:"",dataIndex:"",key:"edit",render:function(e,n,a){return(0,r.jsxs)("div",{className:"actions",children:[(0,r.jsx)(f.Z,{size:"small",onClick:function(){var e=j[a];U(a),W((0,l.Z)({},e)),O(!0),X(e.platform)||T(!0)},children:"Edit"}),(0,r.jsx)(f.Z,{className:"delete-button",icon:(0,r.jsx)(x.Z,{}),size:"small",onClick:function(){return function(e){var n=(0,c.Z)(j);n.splice(e,1),le(n)}(a)}})]})}}],ce={disabled:!(0,b.Z)(V.url)},oe=(0,r.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,r.jsx)("div",{className:"label-side"}),(0,r.jsx)("div",{className:"input-side",children:(0,r.jsx)(m.Z,{placeholder:"Other platform name",defaultValue:V.platform,onChange:function(e){var n=e.target.value;se("platform",n)}})})]});return(0,r.jsxs)("div",{className:"social-links-edit-container",children:[(0,r.jsx)(w,{level:3,className:"section-title",children:"Your Social Handles"}),(0,r.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,r.jsx)(S.E,{status:K}),(0,r.jsx)(p.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:function(e){return"".concat(e.platform,"-").concat(e.url)},columns:ie,dataSource:j}),(0,r.jsx)(h.Z,{title:"Edit Social Handle",visible:E,onOk:function(){A(!0);var e=j.length?(0,c.Z)(j):[];-1===P?e.push(V):e.splice(P,1,V),le(e)},onCancel:te,confirmLoading:L,okButtonProps:ce,children:(0,r.jsxs)("div",{className:"social-handle-modal-content",children:[(0,r.jsx)(k,{iconList:n,selectedOption:ee?N.z_:V.platform,onSelected:function(e){e===N.z_?(T(!0),se("platform","")):(T(!1),se("platform",e))}}),I&&oe,(0,r.jsx)("br",{}),(0,r.jsx)(g.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[V.platform]||"Url to page",value:V.url,onChange:function(e){var n=e.value;se("url",n)},useTrim:!0,type:"url",pattern:b.a}),(0,r.jsx)(S.E,{status:K})]})}),(0,r.jsx)("br",{}),(0,r.jsx)(f.Z,{type:"primary",onClick:function(){ae(),O(!0)},children:"Add a new social link"})]})}}}]);