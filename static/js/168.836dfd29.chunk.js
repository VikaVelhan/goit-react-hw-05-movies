"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(439),a=t(791),c=t(689),u=t(183),i="Reviews_Reviews__HuN7S",s="Reviews_Reviews_title__rNOP2",o="Reviews_Reviews_content__dQg-r",p=t(184),f=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],f=n[1],v=(0,c.UO)().id;return(0,a.useEffect)((function(){(0,u.Xn)(v).then(f)}),[v]),(0,p.jsxs)("div",{className:i,children:[0===(null===t||void 0===t?void 0:t.length)&&(0,p.jsx)("p",{children:"We don't have any reviews for this movie"}),t.map((function(e){return(0,p.jsxs)("li",{className:s,children:["Author: ",e.author,(0,p.jsx)("p",{className:o,children:e.content})]},e.id)}))]})}},183:function(e,n,t){t.d(n,{LC:function(){return f},Mc:function(){return p},WE:function(){return s},Xn:function(){return v},mv:function(){return o}});var r=t(861),a=t(311),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3a0eb1de3b0bf0d77ccee7c23b67ad75",s=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",t=a.length>1?a[1]:void 0,e.next=4,u.Z.get("".concat(n,"?api_key=").concat(i),t);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2?s[2]:void 0,e.next=4,u.Z.get("movie/".concat(n).concat(t,"?api_key=").concat(i,"&language=en-US"),r);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.836dfd29.chunk.js.map