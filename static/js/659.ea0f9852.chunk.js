"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[659],{6713:function(n,e,t){t.d(e,{Ff:function(){return m},MI:function(){return p},_L:function(){return u},gy:function(){return c},q5:function(){return d},yo:function(){return l}});var r=t(4165),a=t(5861),s=t(1243);function u(){return i.apply(this,arguments)}function i(){return i=(0,a.Z)((0,r.Z)().mark((function n(){var e,t,a=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,s.Z.get("/trending/movie/day",{params:{page:e}});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)}))),i.apply(this,arguments)}function c(n){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie?query",{params:{query:e}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/videos"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"35121646617936b190c0d2ce324cb747",include_adult:!1}},1659:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a=t(4165),s=t(5861),u=t(9439),i=t(2791),c=t(7689),o=t(6713),p=t(168),f=t(3517).zo.div(r||(r=(0,p.Z)(["\n  margin-top: 20px;\n  font-size: 18px;\n  .revies-item {\n    display: flex;\n    flex-direction: column;\n    padding: 20px 25px;\n    margin-bottom: 20px;\n    background-color: rgba(255, 247, 247, 0.5);\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);\n  }\n\n  .revies-title {\n    margin-bottom: 10px;\n  }\n\n  .revies-text {\n    margin-bottom: 20px;\n  }\n  .revies-list {\n    list-style-type: none;\n  }\n  .revies-warning {\n    font-size: 50px;\n    color: #660000;\n    display: flex;\n    justify-content: center;\n  }\n"]))),l=t(184),v=function(){var n=(0,i.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],p=(0,c.UO)().moviesID,v=(0,i.useCallback)((0,s.Z)((0,a.Z)().mark((function n(){var e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.q5)(p);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[p]);return(0,i.useEffect)((function(){v()}),[v]),(0,l.jsx)(f,{children:(0,l.jsx)("ul",{className:"revies-list",children:0===t.length?(0,l.jsx)("p",{className:"revies-warning",children:"There are no reviews."}):t.map((function(n){return(0,l.jsxs)("li",{className:"revies-item",children:[(0,l.jsxs)("h3",{className:"revies-title",children:["Author: ",n.author]}),(0,l.jsx)("p",{className:"revies-text",children:n.content})]},n.id)}))})})}}}]);
//# sourceMappingURL=659.ea0f9852.chunk.js.map