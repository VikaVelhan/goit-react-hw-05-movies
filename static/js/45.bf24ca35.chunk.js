"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[45],{45:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(183),u=n(87),o=n(689),s=n(809),i=n(184),f=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],f=e[1],d=(0,o.TH)(),p=(0,o.s0)(),h=(0,o.UO)().id;(0,a.useEffect)((function(){(0,c.Mc)(h).then((function(t){f(t)}))}),[h]);return n?(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"MovieDetails"}),(0,i.jsx)("button",{onClick:function(){p(d.state.from)},children:"Go back"}),(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w400"+n.poster_path,alt:""}),(0,i.jsx)(u.OL,{to:"cast",state:{from:d.state.from},children:"Cast"}),(0,i.jsx)(u.OL,{to:"reviews",state:{from:d.state.from},children:"Reviews"}),(0,i.jsx)(o.j3,{})]}):(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:(0,i.jsx)(s.Z,{})})})}},183:function(t,e,n){n.d(e,{Mc:function(){return f},WE:function(){return s},mv:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="4019d270e5fd1fc6ed3208efae0ca971",s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",n=a.length>1?a[1]:void 0,t.next=4,u.Z.get("".concat(e,"?api_key=").concat(o),n);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2?s[2]:void 0,t.next=4,u.Z.get("movie/".concat(e).concat(n,"?api_key=").concat(o,"&language=en-US"),r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=45.bf24ca35.chunk.js.map