"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[569],{6713:function(e,n,t){t.d(n,{MI:function(){return p},_L:function(){return u},gy:function(){return c},q5:function(){return d},yo:function(){return f}});var r=t(4165),a=t(5861),s=t(1243);function u(){return i.apply(this,arguments)}function i(){return i=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,s.Z.get("/trending/movie/day",{params:{page:n}});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function c(e){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query",{params:{query:n}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"35121646617936b190c0d2ce324cb747",include_adult:!1}},1569:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,a=t(4165),s=t(5861),u=t(9439),i=t(2791),c=t(7689),o=t(6713),p=t(168),l=t(3517).zo.div(r||(r=(0,p.Z)(["\n  margin-top: 20px;\n\n  .revies-item {\n    padding: 20px 25px;\n    background-color: #f2ead3;\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);\n  }\n\n  .revies-title {\n    margin-bottom: 10px;\n  }\n\n  .revies-text {\n    margin-bottom: 20px;\n  }\n  .revies-list {\n    list-style-type: none;\n  }\n  .revies-warning {\n    font-size: 50px;\n    color: #660000;\n    display: flex;\n    justify-content: center;\n  }\n"]))),f=t(184),v=function(){var e=(0,i.useState)([]),n=(0,u.Z)(e,2),t=n[0],r=n[1],p=(0,c.UO)().moviesID,v=(0,i.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.q5)(p);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[p]);return(0,i.useEffect)((function(){v()}),[v]),(0,f.jsx)(l,{children:(0,f.jsx)("ul",{className:"revies-list",children:0===t.length?(0,f.jsx)("p",{className:"revies-warning",children:"There are no reviews."}):t.map((function(e){return(0,f.jsxs)("li",{className:"revies-item",children:[(0,f.jsxs)("h3",{className:"revies-title",children:["Author: ",e.author]}),(0,f.jsx)("p",{className:"revies-text",children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=569.4b4e2b83.chunk.js.map