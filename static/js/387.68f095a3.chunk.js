"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[387],{6713:function(n,t,r){r.d(t,{Ff:function(){return d},MI:function(){return p},_L:function(){return s},gy:function(){return u},q5:function(){return v},yo:function(){return l}});var e=r(4165),a=r(5861),c=r(1243);function s(){return i.apply(this,arguments)}function i(){return i=(0,a.Z)((0,e.Z)().mark((function n(){var t,r,a=arguments;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,c.Z.get("/trending/movie/day",{params:{page:t}});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),i.apply(this,arguments)}function u(n){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query",{params:{query:t}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return A.apply(this,arguments)}function A(){return(A=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/videos"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"35121646617936b190c0d2ce324cb747",include_adult:!1}},3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a=r(4165),c=r(5861),s=r(9439),i=r(2791),u=r(7689),o=r(6713),p=r(1009),f=r(168),l=r(3517).zo.div(e||(e=(0,f.Z)(["\n  margin-top: 20px;\n\n  .cast-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 50px;\n \n  }\n\n  .cast-card {\n    display: flex;\n  }\n  .cast-photo-div {\n    color: white;\n    font-size: 15px;\n    list-style: none;\n    width: 100px;\n    height: 150px;\n\n    border-radius: 10px;\n    border: 0.1px solid #80808042;\n    overflow: hidden;\n  }\n  .cast-photo {\n    width: 100px;\n    height: 150px;\n  }\n  .cast-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 320px;\n    height: 150px;\n    font-size: 18px;\n    color: black;\n    background-color: \t#fff7f7;\n    border-radius: 10px;\n  }\n"]))),A=r(184),v=function(){var n=(0,i.useState)([]),t=(0,s.Z)(n,2),r=t[0],e=t[1],f=(0,u.UO)().moviesID,v=(0,i.useCallback)((0,c.Z)((0,a.Z)().mark((function n(){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.yo)(f);case 3:t=n.sent,e(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie cast:",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[f]);return(0,i.useEffect)((function(){v()}),[v]),(0,A.jsx)(l,{children:(0,A.jsx)("ul",{className:"cast-list",children:0===r.length?(0,A.jsx)("p",{children:"There are no cast members."}):r.map((function(n){var t=n.id,r=n.profile_path,e=n.original_name,a=n.character;return(0,A.jsxs)("li",{className:"cast-card",children:[(0,A.jsx)("div",{className:"cast-photo-div",children:(0,A.jsx)("img",{className:"cast-photo",width:170,src:r?"https://image.tmdb.org/t/p/w300/".concat(r):p,alt:e})}),(0,A.jsxs)("div",{className:"cast-info",children:[(0,A.jsxs)("p",{children:["Name: ",e]}),(0,A.jsxs)("p",{children:["Character: ",a]})]})]},t)}))})})}},1009:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=387.68f095a3.chunk.js.map