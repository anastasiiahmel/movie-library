"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[974],{6713:function(n,e,t){t.d(e,{Ff:function(){return v},MI:function(){return u},_L:function(){return s},gy:function(){return c},q5:function(){return f},yo:function(){return d}});var r=t(4165),i=t(5861),a=t(1243);function s(){return o.apply(this,arguments)}function o(){return o=(0,i.Z)((0,r.Z)().mark((function n(){var e,t,i=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,n.next=3,a.Z.get("/trending/movie/day",{params:{page:e}});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)}))),o.apply(this,arguments)}function c(n){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query",{params:{query:e}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/videos"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"35121646617936b190c0d2ce324cb747",include_adult:!1}},974:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,a=t(4165),s=t(5861),o=t(9439),c=t(2791),l=t(7689),u=t(1087),p=t(6055),d=t(3848),x=t(1909),f=t(6713),m=t(168),v=t(3517),h=v.zo.section(r||(r=(0,m.Z)(["\n  font-size: 18px;\n  .list-additional {\n    cursor: pointer;\n    border-radius: 20px;\n    list-style: none;\n    background-color: #ffe6e6;\n    width: 160px;\n    transition: filter 0.5s;\n    position: relative;\n  }\n\n  .list-additional:hover {\n    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));\n  }\n  .cast-icon {\n    position: absolute;\n    top: 4px;\n    margin-left: 5px;\n    width: 20px;\n    height: 30px;\n  }\n\n  .list {\n    display: flex;\n    gap: 10px;\n    padding: 0px;\n    margin-top: 20px;\n  }\n\n  .back-btn {\n    color: #660000 !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 15px;\n    width: 150px;\n    height: 40px;\n    border-radius: 50px;\n    border: 3px solid #fff;\n\n    font-size: 18px;\n    font-weight: bold;\n    text-transform: uppercase;\n    cursor: pointer;\n    outline: none;\n    transition: background-color 0.3s, color 0.3s, border-color 0.5s;\n  }\n  .back-btn:hover {\n    border-color: #660000 !important;\n  }\n\n  .back-link {\n    padding: 0 25px;\n  }\n  .main-content {\n    display: flex;\n    gap: 20px;\n  }\n\n  .main-img {\n    width: 100%;\n    max-width: 350px;\n    height: 100%;\n    max-height: 480px;\n  }\n\n  .main-decr {\n    display: flex;\n    margin-top: 50px;\n    flex-direction: column;\n  }\n\n  .card-title {\n    font-weight: 500;\n    margin-bottom: 20px;\n  }\n\n  .card-score {\n    margin-bottom: 20px;\n  }\n\n  .card-overview {\n    margin-bottom: 10px;\n  }\n\n  .text-overview {\n    margin-bottom: 20px;\n  }\n\n  .genres-title {\n    margin-bottom: 10px;\n  }\n  .genres-item {\n    background-color: #ffe6e6;\n    margin-right: 10px;\n    padding: 5px 10px;\n    border-radius: 20px;\n  }\n\n  .info-link {\n    display: inline-block;\n    padding: 10px 40px;\n    padding-right: 80px;\n    border-radius: 15px;\n    text-decoration: none;\n    text-align: center;\n    font-size: 18px;\n    color: #000;\n\n    font-weight: 500;\n    transition: background-color 0.3s, color 0.3s;\n  }\n\n  .last-link {\n    margin-bottom: 0;\n  }\n  .loading-subpage {\n    display: flex;\n    justify-content: center;\n    font-size: 50px;\n    color: #660000;\n  }\n"]))),g=t(1009),k=t(1936),b=v.zo.div(i||(i=(0,m.Z)(["\n  .modal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1000;\n  }\n\n  .modal-content {\n    padding: 50px;\n    border-radius: 10px;\n    text-align: center;\n    position: relative;\n  }\n\n  .close {\n    position: absolute;\n    top: -20px;\n    right: 10px;\n    font-size: 50px;\n    color: #660000;\n    font-weight: bold;\n    cursor: pointer;\n    transition: color 0.5s;\n  }\n\n  .close:hover {\n    color: #722121;\n  }\n\n  .video-title {\n    position: relative;\n    font-size: 20px;\n    cursor: pointer;\n    color: black;\n    transition: color 0.5s;\n    margin-top: 30px;\n    margin-left: 5px;\n  }\n  .video-title:hover {\n    color: #660000;\n  }\n\n  .video-icon {\n    position: absolute;\n    top: -5px;\n    margin-left: 10px;\n    width: 30px;\n    height: 30px;\n  }\n"]))),A=t(184),w=function(){var n=(0,l.UO)().moviesID,e=(0,c.useState)(null),t=(0,o.Z)(e,2),r=t[0],i=t[1],u=(0,c.useState)(!1),p=(0,o.Z)(u,2),d=p[0],m=p[1],v=(0,c.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var t,r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Ff)(n);case 3:t=e.sent,r=t.results,s=r.find((function(n){return"Official Trailer"===n.name&&"YouTube"===n.site})),i(s||null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching movie video:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[n]);(0,c.useEffect)((function(){v()}),[v]);var h=function(){return m((function(n){return!n}))};return(0,A.jsxs)(b,{children:[r&&(0,A.jsx)("div",{className:"video-container",children:(0,A.jsxs)("h3",{className:"video-title",onClick:h,children:[r.name,(0,A.jsx)(x.Jg8,{className:"video-icon"})]})}),d&&(0,A.jsx)("div",{className:"modal",children:(0,A.jsxs)("div",{className:"modal-content",children:[(0,A.jsx)("span",{className:"close",onClick:h,children:"\xd7"}),(0,A.jsx)("iframe",{width:"800",height:"500",src:"https://www.youtube.com/embed/".concat(r.key),title:r.name,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})]})},Z=function(){var n,e=(0,l.UO)().moviesID,t=(0,l.TH)(),r=(0,c.useState)({}),i=(0,o.Z)(r,2),m=i[0],v=i[1],b=(null===(n=t.state)||void 0===n?void 0:n.from)||"/",Z=(0,c.useCallback)((0,s.Z)((0,a.Z)().mark((function n(){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.MI)(e);case 3:t=n.sent,v(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[e]);(0,c.useEffect)((function(){Z()}),[Z]);var N=m.title,y=m.release_date,T=m.vote_average,j=m.overview,E=m.genres,L=m.poster_path,Y=new Date(y).getFullYear(),S=Math.round(10*T);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(h,{children:[(0,A.jsx)(p.ZP,{className:"back-btn",to:b,children:(0,A.jsx)(u.rU,{className:"back-link",to:b,children:"Go back"})}),(0,A.jsxs)("div",{className:"main-content",children:[(0,A.jsx)("img",{className:"main-img",width:170,src:L?"https://image.tmdb.org/t/p/w500/".concat(L):g,alt:N}),(0,A.jsxs)("div",{className:"main-decr",children:[(0,A.jsxs)("div",{children:[(0,A.jsxs)("h2",{className:"card-title",children:[N," (",Y,")"]}),(0,A.jsxs)("p",{className:"card-score",children:["User score ",S," %"]}),(0,A.jsx)("h3",{className:"card-overview",children:"Overview:"}),(0,A.jsx)("p",{className:"text-overview",children:j}),(0,A.jsx)("h3",{className:"genres-title",children:"Genres:"}),E&&E.map((function(n){return(0,A.jsxs)("span",{className:"genres-item",children:[n.name," "]},n.id)})),(0,A.jsx)(w,{})]}),(0,A.jsx)("div",{children:(0,A.jsxs)("ul",{className:"list",children:[(0,A.jsx)("li",{className:"list-additional list-cast",children:(0,A.jsxs)(u.rU,{className:"info-link",to:"cast",state:{from:b},children:["CAST",(0,A.jsx)(d.JwX,{className:"cast-icon"})]})}),(0,A.jsx)("li",{className:"list-additional",children:(0,A.jsxs)(u.rU,{className:"info-link last-link",to:"review",state:{from:b},children:["REVIEWS",(0,A.jsx)(x.b12,{className:"cast-icon"})]})})]})})]})]})]}),(0,A.jsx)(c.Suspense,{fallback:(0,A.jsx)(k.a,{}),children:(0,A.jsx)(l.j3,{})})]})},N=function(){return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(Z,{})})}},1009:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=974.043fd6d8.chunk.js.map