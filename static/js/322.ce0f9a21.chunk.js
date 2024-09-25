"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[322],{6713:function(n,t,e){e.d(t,{Ff:function(){return A},MI:function(){return p},_L:function(){return s},gy:function(){return o},q5:function(){return x},yo:function(){return l}});var r=e(4165),i=e(5861),a=e(1243);function s(){return c.apply(this,arguments)}function c(){return c=(0,i.Z)((0,r.Z)().mark((function n(){var t,e,i=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,n.next=3,a.Z.get("/trending/movie/day",{params:{page:t}});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)}))),c.apply(this,arguments)}function o(n){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query",{params:{query:t}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function A(n){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"/videos"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"35121646617936b190c0d2ce324cb747",include_adult:!1}},5e3:function(n,t,e){e.d(t,{Z:function(){return v}});var r,i=e(9439),a=e(2791),s=e(7689),c=e(1087),o=e(168),u=e(3517).zo.div(r||(r=(0,o.Z)(["\n  text-align: center;\n\n  .hero-section-title {\n    font-weight: 800;\n    margin-bottom: 20px;\n  }\n  .movie-list {\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n\n  .movie-preview {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    max-width: 210px;\n    max-height: 400px;\n    background-color: white;\n    border-radius: 5%;\n    overflow: hidden;\n    transition: background-color 0.5s;\n    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));\n  }\n  .movie-img {\n    max-width: 210px;\n    max-height: 315px;\n  }\n\n  .movie-preview:hover {\n    background-color: #722121;\n  }\n\n  .movie-preview:hover .film-name {\n    color: #fff;\n    font-size: 15px;\n  }\n\n  .film-name {\n    font-size: 18px;\n    font-weight: 700;\n    text-align: center;\n    min-height: 30px;\n    width: 100%;\n    transition: color 0.5s, font-size 0.5s;\n  }\n\n  .hero-section-title {\n    font-size: 50px;\n    color: #660000;\n  }\n"]))),p=e(157),f=e(1936),l=e(184),v=function(n){var t=n.trendFilms,e=n.searchResults,r=(0,s.TH)(),o=(0,a.useState)([]),v=(0,i.Z)(o,2),x=v[0],m=v[1],A=(0,a.useState)(!1),d=(0,i.Z)(A,2),h=d[0],w=d[1],k="/"===r.pathname;(0,a.useEffect)((function(){var n=t||e;n&&(w(!0),m(n),w(!1))}),[t,e]);return(0,l.jsxs)(u,{children:[k&&(0,l.jsx)("h1",{className:"hero-section-title",children:"Trending Movies"}),h&&(0,l.jsx)(f.a,{}),(0,l.jsx)("ul",{className:"movie-list",children:x.map((function(n){return(0,l.jsx)("li",{className:"movie-item",children:(0,l.jsx)("div",{className:"movie-preview",children:(0,l.jsxs)(c.rU,{style:{textDecoration:"none",color:"black"},to:(t=n.id,"/movies/".concat(t)),state:{from:r},children:[(0,l.jsx)("img",{className:"movie-img",src:n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):p,alt:n.title,onError:function(n){n.target.src=p}}),(0,l.jsx)("p",{className:"film-name",children:n.title})]})})},n.id);var t}))})]})}},1322:function(n,t,e){e.r(t);var r=e(4165),i=e(5861),a=e(9439),s=e(2791),c=e(6713),o=e(5e3),u=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],p=t[1],f=(0,s.useCallback)((0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c._L)();case 3:t=n.sent,p(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[]);return(0,s.useEffect)((function(){f()}),[f]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.Z,{trendFilms:e})})}},157:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=322.ce0f9a21.chunk.js.map