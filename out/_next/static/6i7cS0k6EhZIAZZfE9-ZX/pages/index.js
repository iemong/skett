(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(n,e,t){"use strict";t.r(e);var i=t("doui"),r=t("q1tI"),a=t("rt45"),o=t("ln6h"),u=t.n(o),c=t("O40h"),f=t("5D9J"),d=t("YFqc"),l=t.n(d),s=t("/MKj"),p=t("KlQ4"),x=t("tH0z"),O=t("Bpuu"),g=r.createElement;function b(){var n=Object(a.a)(["\n  text-decoration: none;\n"]);return b=function(){return n},n}function m(){var n=Object(a.a)([""]);return m=function(){return n},n}function h(){var n=Object(a.a)(["\n    width: 100%;\n    text-align: left;\n    color: #fff;\n    line-height: 1.2;\n    font-size: 48px;\n    margin-bottom: 24px;\n"]);return h=function(){return n},n}function v(){var n=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 30px 30px 30px;\n    box-sizing: border-box;\n"]);return v=function(){return n},n}function w(){var n=Object(a.a)(["\n    width: 100%;\n"]);return w=function(){return n},n}function j(){var n=Object(a.a)(["\n    min-height: 386px;\n    background-color: #fff;\n"]);return j=function(){return n},n}function k(){var n=Object(a.a)(["\n    width: 690px;\n    &[data-side='help'] {\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n    }\n    &[data-side='support'] {\n        background-image: linear-gradient(to left, #35b597, #00a968);\n    }\n    margin: 0 auto 40px;\n    border-radius: 16px;\n    overflow: hidden;\n"]);return k=function(){return n},n}var E=function(n){var e=n.imgUrl,t=n.description,i=n.link,r=n.side;return g(y,{"data-side":r},g(S,null,g(_,{src:e,alt:"description"})),g(I,null,g(P,null,t),g(z,{href:"".concat(i,"?side=").concat(r)},g(C,{width:"270px",height:"50px",styleType:"help"===r?"secondary":"invertSecondary"},"\u8a73\u3057\u304f\u898b\u308b"))))},y=f.a.div(k()),S=f.a.div(j()),_=f.a.img(w()),I=f.a.div(v()),P=f.a.p(h()),C=Object(f.a)(O.a)(m()),z=f.a.a(b()),M=t("7r4h"),T=t("obq+"),U=r.createElement;function q(){var n=Object(a.a)(["\n    position: fixed;\n    right: 0;\n    bottom: 100px;\n    display: block;\n    width: 251px;\n    height: 81px;\n    background-image: url(/img/btn_add.png);\n    color: transparent;\n"]);return q=function(){return n},n}function B(){var n=Object(a.a)(["\n    margin-top: 60px;\n"]);return B=function(){return n},n}var D=function(){var n=M.a.firestore().collection(T.b.POSTS),e=r.useState([]),t=Object(i.a)(e,2),a=t[0],o=t[1],f=Object(s.d)(function(n){return n.rootReducer.tab}).side,d=r.useCallback(Object(c.a)(u.a.mark(function e(){var t,i,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.orderBy("timestamp","desc").get().catch(function(n){return console.error(n)});case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:i=t.docs,r=i.map(function(n){return n.data()}),o(r);case 8:case"end":return e.stop()}},e)})),[n]);r.useEffect(function(){d()},[]);var O=r.useMemo(function(){return a.filter(function(n){return"help"===n.side}).map(function(n,e){var t;return U(E,{key:e,imgUrl:n.imageUrl,description:n.title,link:"/posts/".concat(null!==(t=n.id)&&void 0!==t?t:""),side:"help"})})},[a]),g=r.useMemo(function(){return a.filter(function(n){return"support"===n.side}).map(function(n,e){var t;return U(E,{key:e,imgUrl:n.imageUrl,description:n.title,link:"/posts/".concat(null!==(t=n.id)&&void 0!==t?t:""),side:"support"})})},[a]),b=U(F,null,O),m=U(F,null,g);return U(p.a,null,U(r.Fragment,null,U(x.a,{leftContent:b,rightContent:m,tabSide:"help"===f?"left":"right"}),U(l.a,{href:"/register"},U(J,null,"\u58f0\u306e\u8ffd\u52a0"))))},F=f.a.div(B()),J=f.a.button(q()),R=r.createElement;function A(){var n=Object(a.a)(["\n    color: #fff;\n    font-size: 24px;\n"]);return A=function(){return n},n}function K(){var n=Object(a.a)(["\n    width: 504px;\n    margin: 0 auto 65px;\n    line-height: 1.5;\n    color: #fff;\n    font-size: 28px;\n"]);return K=function(){return n},n}function L(){var n=Object(a.a)([""]);return L=function(){return n},n}function N(){var n=Object(a.a)(["\n    width: 303px;\n"]);return N=function(){return n},n}function X(){var n=Object(a.a)(["\n    margin-top: auto;\n    color: #fff;\n    font-size: 12px;\n"]);return X=function(){return n},n}function H(){var n=Object(a.a)([""]);return H=function(){return n},n}function Q(){var n=Object(a.a)(["\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    margin-right: 20px;\n"]);return Q=function(){return n},n}function V(){var n=Object(a.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 32px;\n"]);return V=function(){return n},n}function W(){var n=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n"]);return W=function(){return n},n}function Y(){var n=Object(a.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(to right, #00b4ed, #0091db);\n"]);return Y=function(){return n},n}var G=function(){return R(Z,null,R($,null,R(nn,null,R(en,null,R(tn,{src:"/img/svg/ttl_pc.svg",alt:""}),R(rn,null,"\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3054\u5229\u7528\u304f\u3060\u3055\u3044"),R(an,{src:"/img/svg/icn_arrow.svg",alt:""})),R(on,{src:"/img/pic_qr.png",alt:""})),R(un,null,"\u88ab\u707d\u5730\u3067\u56f0\u3063\u3066\u3044\u308b\u4eba\u3068\u30dc\u30e9\u30f3\u30c6\u30a3\u30a2\u3092\u76f4\u63a5\u7d50\u3073\u3064\u3051\u308bWEB\u30b5\u30fc\u30d3\u30b9"),R(cn,null,"#\u88ab\u707d\u5730\u306e\u30b9\u30b1\u30c3\u30c8")))},Z=f.a.div(Y()),$=f.a.div(W()),nn=f.a.div(V()),en=f.a.div(Q()),tn=f.a.img(H()),rn=f.a.p(X()),an=f.a.img(N()),on=f.a.img(L()),un=f.a.p(K()),cn=f.a.p(A()),fn=r.createElement;e.default=function(){var n=r.useState(!1),e=Object(i.a)(n,2),t=e[0],a=e[1];return r.useEffect(function(){a(function(){var n=window.navigator.userAgent.toLowerCase(),e=window.navigator.appVersion.toLowerCase(),t=-1!==n.indexOf("msie")&&-1===n.indexOf("opera"),i=-1!==n.indexOf("trident/7"),r={Tablet:-1!==n.indexOf("windows")&&-1!==n.indexOf("touch")&&-1===n.indexOf("tablet pc")||-1!==n.indexOf("ipad")||-1!==n.indexOf("android")&&-1===n.indexOf("mobile")||-1!==n.indexOf("firefox")&&-1!==n.indexOf("tablet")||-1!==n.indexOf("kindle")||-1!==n.indexOf("silk")||-1!==n.indexOf("playbook"),Mobile:-1!==n.indexOf("windows")&&-1!==n.indexOf("phone")||-1!==n.indexOf("iphone")||-1!==n.indexOf("ipod")||-1!==n.indexOf("android")&&-1!==n.indexOf("mobile")||-1!==n.indexOf("firefox")&&-1!==n.indexOf("mobile")||-1!==n.indexOf("blackberry"),iOS:-1!==n.indexOf("iphone")||-1!==n.indexOf("ipod")||-1!==n.indexOf("ipad"),iPad:-1!==n.indexOf("ipad"),iPhone:-1!==n.indexOf("iphone"),Android:-1!==n.indexOf("android"),MSIE:t,IE6:t&&-1!==e.indexOf("msie 6."),IE7:t&&-1!==e.indexOf("msie 7."),IE8:t&&-1!==e.indexOf("msie 8."),IE9:t&&-1!==e.indexOf("msie 9."),IE10:t&&-1!==e.indexOf("msie 10."),IE11:i,IE:t||i,Edge:-1!==n.indexOf("edge"),Chrome:-1!==n.indexOf("chrome")&&-1===n.indexOf("edge"),Firefox:-1!==n.indexOf("firefox"),Safari:-1!==n.indexOf("safari")&&-1===n.indexOf("chrome"),Opera:-1!==n.indexOf("opera")};return r.isSP=r.Mobile||r.Tablet,r.isPC=!r.isSP,r}().isPC)},[]),fn(t?G:D,null)}}},[["/EDR",1,0]]]);