"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{368:function(e,t,n){var r=n(689),a=n(87),c=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.OL,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},134:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),o=n(87),s=n(183),f=n(368),p=n(184);t.default=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,i.useState)([]),l=(0,a.Z)(v,2),d=l[0],h=l[1],m=(0,o.lr)(),g=(0,a.Z)(m,2),x=g[0],k=g[1],b=x.get("query");(0,i.useEffect)((function(){b&&(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.mv)(b);case 3:t=e.sent,n=t.results,h(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,c(b),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[b]);return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Movies"}),(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k({query:n})},children:[(0,p.jsx)("input",{type:"text",value:n,onChange:function(e){var t=e.target.value;c(t)}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsx)(f.Z,{movies:d})]})}},183:function(e,t,n){n.d(t,{LC:function(){return p},Mc:function(){return f},WE:function(){return o},Xn:function(){return v},mv:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3a0eb1de3b0bf0d77ccee7c23b67ad75",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",n=a.length>1?a[1]:void 0,e.next=4,u.Z.get("".concat(t,"?api_key=").concat(i),n);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"",r=o.length>2?o[2]:void 0,e.next=4,u.Z.get("movie/".concat(t).concat(n,"?api_key=").concat(i,"&language=en-US"),r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.ed380649.chunk.js.map