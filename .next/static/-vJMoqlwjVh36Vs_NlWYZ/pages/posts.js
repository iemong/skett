(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9Jkg":function(n,t,r){n.exports=r("HAE9")},HAE9:function(n,t,r){var e=r("p9MR"),o=e.JSON||(e.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},XCPh:function(n,t,r){"use strict";r.r(t);var e=r("rt45"),o=r("ln6h"),a=r.n(o),u=r("zrwo"),c=r("O40h"),i=r("9Jkg"),s=r.n(i),l=r("q1tI"),p=r("5D9J"),f=r("KlQ4"),d=r("7r4h"),w=r("obq+"),g=l.createElement;function h(){var n=Object(e.a)(["\n    font-size: 20px;\n    color: red;\n"]);return h=function(){return n},n}var v=function(n){var t=n.data;return console.log(n),console.log(t),g(f.a,null,g(l.Fragment,null,g(J,null,"This is Posts page"),g("p",null,s()(t))))};v.getInitialProps=Object(c.a)(a.a.mark(function n(){var t,r,e,o;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=d.a.firestore(),r=t.collection(w.a.POSTS),n.next=4,r.get().catch(function(n){return console.error(n)});case 4:return e=n.sent,o=e&&e.docs.map(function(n){return Object(u.a)({},n.data(),{id:n.id})}),n.abrupt("return",{data:o});case 7:case"end":return n.stop()}},n)})),t.default=v;var J=p.a.h1(h())},Zttu:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return r("XCPh")}])}},[["Zttu",1,0]]]);