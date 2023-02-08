(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{215:function(t,e,n){},227:function(t,e,n){"use strict";n.r(e);var r=n(43),c=n(69),a=n(7),s=n(5),i=n(38),o=n(36),u=n(23),l=n(0),p=n(11),b=(n(215),n(2)),m=function(t,e,n){switch(t){case"waiting":return Object(b.jsx)(u.a,{});case"loading":return e?Object(b.jsx)(n,{}):Object(b.jsx)(u.a,{});case"confirmed":return Object(b.jsx)(n,{});case"error":return Object(b.jsx)(o.a,{});default:throw new Error("Unexpected process state")}},f=function(){var t=Object(i.a)(),e=t.getAllComics,n=t.process,r=t.setProcess,c=Object(l.useState)(!1),o=Object(s.a)(c,2),u=o[0],f=o[1],j=Object(l.useState)([]),d=Object(s.a)(j,2),h=d[0],v=d[1],O=Object(l.useState)(!1),g=Object(s.a)(O,2),x=g[0],w=g[1],_=Object(l.useState)(210),k=Object(s.a)(_,2),y=k[0],C=k[1];Object(l.useEffect)((function(){N(y,!0)}),[]);var N=function(t,n){w(!n),e(t).then(A).then((function(){return r("confirmed")}))},A=function(t){t.length<8&&f(!0),v((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))})),w(!1),C((function(t){return t+8}))};return Object(b.jsxs)("div",{className:"comics__list",children:[Object(b.jsx)("ul",{className:"comics__grid",children:m(n,x,(function(){return h.map((function(t){return Object(b.jsx)("li",{className:"comics__item",tabIndex:"0",children:Object(b.jsxs)(p.b,{to:"/buildFolder/marvel-app/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.alt,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsx)("div",{className:"comics__item-price",children:0===t.price?"NOT AVAILABLE":t.price+"$"})]})},t.id)}))}))}),Object(b.jsx)("button",{className:"button button__main button__long",disabled:x,style:{display:u?"none":"block"},onClick:function(){return N(y)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(r.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(c.a,{}),Object(b.jsx)(f,{})]})}},36:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(2);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error"})}},38:function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(6),s=n(5),i=n(0);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(s.a)(t,2),n=e[0],r=e[1];return{request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r("loading"),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),r("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){r("loading")}),[]),process:n,setProcess:r}}(),e=t.request,n=t.clearError,r=t.process,o=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=9f42dbb8a7f74b20d592fb1bcf23429e",p=210,b=function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(n,"&").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(){var n,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"comics?limit=8&offset=").concat(n,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(n,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",v(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(){var n,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(n,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(n,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",h(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){return{name:t.name,descr:t.description?t.description:"Description not found",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items,id:t.id}},v=function(t){return{title:t.title,id:t.id,price:t.prices[0].price,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,alt:t.variantDescription,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",language:t.textObjects.language||"en-us"}};return{process:r,setProcess:o,getAllCharecters:j,getCharecter:d,clearError:n,getAllComics:m,getComic:f,getCharacterByName:b}}},68:function(t,e,n){},69:function(t,e,n){"use strict";n(68);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(2);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=7.f708cf12.chunk.js.map