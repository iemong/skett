(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9Jkg":function(n,t,r){n.exports=r("HAE9")},HAE9:function(n,t,r){var e=r("p9MR"),o=e.JSON||(e.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},XCPh:function(n,t,r){"use strict";r.r(t);var e=r("rt45"),o=r("ln6h"),u=r.n(o),a=r("zrwo"),c=r("O40h"),i=r("9Jkg"),f=r.n(i),s=r("q1tI"),l=r("5D9J"),p=r("KlQ4"),w=r("7r4h"),d=r("obq+"),h=s.createElement;function g(){var n=Object(e.a)(["\n    font-size: 20px;\n    color: red;\n"]);return g=function(){return n},n}var v=function(n){var t=n.data;return console.log(n),console.log(t),h(p.a,null,h(s.Fragment,null,h(b,null,"This is Posts page"),h("p",null,f()(t))))};v.getInitialProps=Object(c.a)(u.a.mark(function n(){var t,r,e,o;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=w.a.firestore(),r=t.collection(d.b.POSTS),n.next=4,r.get().catch(function(n){return console.error(n)});case 4:return e=n.sent,o=e&&e.docs.map(function(n){return Object(a.a)({},n.data(),{id:n.id})}),n.abrupt("return",{data:o});case 7:case"end":return n.stop()}},n)})),t.default=v;var b=l.a.h1(g())},Zttu:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return r("XCPh")}])},zrwo:function(n,t,r){"use strict";var e=r("Jo+v"),o=r.n(e),u=r("4mXO"),a=r.n(u),c=r("pLtp"),i=r.n(c),f=r("hfKm"),s=r.n(f);function l(n,t,r){return t in n?s()(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function p(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=i()(r);"function"===typeof a.a&&(e=e.concat(a()(r).filter(function(n){return o()(r,n).enumerable}))),e.forEach(function(t){l(n,t,r[t])})}return n}r.d(t,"a",function(){return p})}},[["Zttu",1,0]]]);