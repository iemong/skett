(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/EDR":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("23aj")}])},"23aj":function(n,t,e){"use strict";e.r(t);var i=e("q1tI"),r=e("rt45"),a=e("ln6h"),o=e.n(a),u=e("O40h"),c=e("doui"),d=e("5D9J"),p=e("YFqc"),l=e.n(p),s=e("/MKj"),g=e("KlQ4"),f=e("tH0z"),b=e("Bpuu"),h=i.createElement;function m(){var n=Object(r.a)(["\n    text-decoration: none;\n"]);return m=function(){return n},n}function x(){var n=Object(r.a)([""]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n    width: 100%;\n    text-align: left;\n    color: #fff;\n    line-height: 1.2;\n    font-size: 48px;\n    margin-bottom: 24px;\n"]);return v=function(){return n},n}function w(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 30px 30px 30px;\n    box-sizing: border-box;\n"]);return w=function(){return n},n}function k(){var n=Object(r.a)(["\n    width: 100%;\n"]);return k=function(){return n},n}function z(){var n=Object(r.a)(["\n    background-color: #fff;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n\n    &::before {\n        display: block;\n        width: 100%;\n        padding-bottom: 56.25%;\n        content: '';\n    }\n"]);return z=function(){return n},n}function j(){var n=Object(r.a)(["\n    width: 690px;\n    &[data-side='help'] {\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n    }\n    &[data-side='support'] {\n        background-image: linear-gradient(to left, #35b597, #00a968);\n    }\n    &[data-side='organization'] {\n        background-image: linear-gradient(to left, #e85625, #fd7823);\n    }\n    margin: 0 auto 40px;\n    border-radius: 16px;\n    overflow: hidden;\n"]);return j=function(){return n},n}var O=function(n){var t=n.imgUrl,e=n.description,i=n.link,r=n.side,a="help"===r?"secondary":"support"===r?"invertSecondary":"organization"===r?"organizationSecondary":"secondary";return h(y,{"data-side":r},t&&h(_,{style:{backgroundImage:"url(".concat(t,")")}}),h(C,null,h(E,null,e),h(M,{href:"".concat(i,"?side=").concat(r)},h(S,{width:"270px",height:"50px",styleType:a},"\u8a73\u3057\u304f\u898b\u308b"))))},y=d.a.div(j()),_=d.a.div(z()),C=(d.a.img(k()),d.a.div(w())),E=d.a.p(v()),S=Object(d.a)(b.a)(x()),M=d.a.a(m()),T=e("7r4h"),q=e("obq+"),U=i.createElement;function B(){var n=Object(r.a)(["\n    @media (min-width: 751px) {\n        & > div > div:nth-child(2) > div:nth-child(2) {\n            display: flex;\n            flex-wrap: wrap;\n            max-width: 780px;\n            width: 100%;\n            margin: 0 auto;\n            &:after {\n                width: calc(100% / 2 - 32px);\n                display: block;\n                content: '';\n            }\n\n            & > div {\n                width: calc(100% / 2 - 32px);\n            }\n        }\n    }\n"]);return B=function(){return n},n}function D(){var n=Object(r.a)(["\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 120px;\n    background-image: linear-gradient(to right, #e8563a 0%, #e53a2b 100%);\n    color: #fff;\n    font-size: 28px;\n    font-weight: bold;\n    text-decoration: none;\n\n    &::before {\n        content: '+';\n        font-size: 48px;\n        font-weight: normal;\n        margin-right: 8px;\n    }\n\n    @media (min-width: 751px) {\n        max-width: 780px;\n        height: 60px;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        font-size: 14px;\n\n        &::before {\n            font-size: 24px;\n        }\n    }\n"]);return D=function(){return n},n}function H(){var n=Object(r.a)(["\n    margin-top: 60px;\n"]);return H=function(){return n},n}var J=function(){var n=T.a.firestore().collection(q.b.POSTS),t=i.useState([]),e=Object(c.a)(t,2),r=e[0],a=e[1],d=Object(s.d)(function(n){return n.rootReducer.tab}).side,p=i.useCallback(Object(u.a)(o.a.mark(function t(){var e,i,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.where("isEnd","==",!1).where("isDeleted","==",!1).orderBy("timestamp","desc").get().catch(function(n){return console.error(n)});case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:i=e.docs,r=i.map(function(n){return n.data()}),a(r);case 8:case"end":return t.stop()}},t)})),[n]);i.useEffect(function(){p()},[]);var b=i.useMemo(function(){return r.filter(function(n){return"help"===n.side}).map(function(n,t){var e;return U(O,{key:t,imgUrl:n.imageUrl,description:n.title,link:"/posts/".concat(null!==(e=n.id)&&void 0!==e?e:""),side:"help"})})},[r]),h=i.useMemo(function(){return r.filter(function(n){return"support"===n.side}).map(function(n,t){var e;return U(O,{key:t,imgUrl:n.imageUrl,description:n.title,link:"/posts/".concat(null!==(e=n.id)&&void 0!==e?e:""),side:"support"})})},[r]),m=i.useMemo(function(){return r.filter(function(n){return"organization"===n.side}).map(function(n,t){var e;return U(O,{key:t,imgUrl:n.imageUrl,description:n.title,link:"/posts/".concat(null!==(e=n.id)&&void 0!==e?e:""),side:"organization"})})},[r]),x=U(N,null,b),v=U(N,null,h),w=U(N,null,m),k=i.useMemo(function(){return"organization"===d?"https://forms.gle/xqosY3davqivXJDd7":"/register"},[d]),z=i.useMemo(function(){return"organization"===d?"_blank":"_self"},[d]);return U(g.a,null,U(i.Fragment,null,U(A,null,U(f.a,{tabSide:d,helpContents:x,supportContents:v,organizationContents:w})),U(l.a,{href:k},U(R,{href:k,target:z},"\u58f0\u3092\u3064\u304f\u308b"))))},N=d.a.div(H()),R=d.a.a(D()),A=d.a.div(B()),K=i.createElement;t.default=function(){return K(J,null)}},tH0z:function(n,t,e){"use strict";var i=e("rt45"),r=e("doui"),a=e("q1tI"),o=e("nOHt"),u=e("/MKj"),c=e("ANjH"),d=e("5D9J"),p=e("obq+"),l=e("YJHu"),s=e("Bpuu"),g=a.createElement;function f(){var n=Object(i.a)(["\n    text-decoration: none;\n"]);return f=function(){return n},n}function b(){var n=Object(i.a)(["\n    width: 100%;\n    text-align: left;\n    color: #fff;\n    line-height: 1.2;\n    font-size: 40px;\n    white-space: pre-wrap;\n    margin-bottom: 24px;\n"]);return b=function(){return n},n}function h(){var n=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 60px;\n    box-sizing: border-box;\n"]);return h=function(){return n},n}function m(){var n=Object(i.a)(["\n    width: 690px;\n    &[data-side='help'] {\n        background-image: linear-gradient(to left, #00b4ed, #0091db);\n    }\n    &[data-side='support'] {\n        background-image: linear-gradient(to left, #35b597, #00a968);\n    }\n    &[data-side='organization'] {\n        background-image: linear-gradient(to left, #e85625, #fd7823);\n    }\n    margin: 40px auto;\n    border-radius: 16px;\n    overflow: hidden;\n"]);return m=function(){return n},n}function x(){var n=Object(i.a)(["\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 11px;\n\n    &[data-tab='help'] {\n        background-image: linear-gradient(to right, #00b4ed, #0091db);\n    }\n    &[data-tab='support'] {\n        background-image: linear-gradient(to right, #1aab92 33%, #00a968 66%);\n    }\n    &[data-tab='organization'] {\n        background-image: linear-gradient(to right, #ef6123 0%, #ef6123 66%, #e85625 100%);\n    }\n\n    @media (min-width: 751px) {\n        height: 6px;\n    }\n"]);return x=function(){return n},n}function v(){var n=Object(i.a)(["\n    position: absolute;\n    width: 250px;\n    height: 81px;\n    box-sizing: border-box;\n    z-index: ",";\n    background-repeat: no-repeat;\n    background-size: contain;\n    opacity: 0.5;\n    cursor: pointer;\n\n    &[data-selected='true'] {\n        /* background-image: url(/img/tab_support_on.png); */\n        z-index: ",";\n        pointer-events: none;\n        opacity: 1;\n    }\n\n    @media (min-width: 751px) {\n        width: 260px;\n        height: 45px;\n\n        &[data-selected='true'] {\n        }\n    }\n\n    &[data-tab='help'] {\n        left: 0;\n        background-image: url(/img/tab_help_sp.png);\n\n        @media (min-width: 751px) {\n            background-image: url(/img/tab_help_pc.png);\n        }\n    }\n    &[data-tab='support'] {\n        left: 0;\n        right: 0;\n        width: 270px;\n        margin: 0 auto;\n        background-image: url(/img/tab_support_sp.png);\n\n        @media (min-width: 751px) {\n            background-image: url(/img/tab_support_pc.png);\n        }\n    }\n    &[data-tab='organization'] {\n        right: 0;\n        background-image: url(/img/tab_organization_sp.png);\n\n        @media (min-width: 751px) {\n            background-image: url(/img/tab_organization_pc.png);\n        }\n    }\n"]);return v=function(){return n},n}function w(){var n=Object(i.a)(["\n    position: relative;\n    max-width: 780px;\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n"]);return w=function(){return n},n}function k(){var n=Object(i.a)(["\n    position: relative;\n    height: 91px;\n    background-color: #dbdcdc;\n    @media (min-width: 751px) {\n        height: 46px;\n    }\n"]);return k=function(){return n},n}var z=d.a.div(k()),j=d.a.div(w()),O=d.a.div(v(),p.d.TAB_BACK,p.d.TAB_FRONT),y=d.a.div(x()),_=d.a.div(m()),C=d.a.div(h()),E=d.a.p(b()),S=d.a.a(f());t.a=function(n){var t=n.helpContents,e=n.supportContents,i=n.organizationContents,d=n.onClickHelp,p=n.onClickSupport,f=n.onClickOrganization,b=n.className,h=n.tabSide,m=Object(o.useRouter)(),x=Object(u.d)(function(n){return n.rootReducer.tab}).side,v=a.useState(h),w=Object(r.a)(v,2),k=w[0],M=w[1],T=Object(u.c)(),q=a.useMemo(function(){return Object(c.b)(l,T)},[T]);a.useEffect(function(){M(x)},[x]);var U=function(n){M(n),q.update(n),m.push("/"),"help"===n&&(null===d||void 0===d||d()),"support"===n&&(null===p||void 0===p||p()),"organization"===n&&(null===f||void 0===f||f())},B=a.useMemo(function(){return"help"===x?"secondary":"support"===x?"invertSecondary":"organization"===x?"organizationSecondary":"secondary"},[x]);return g("div",{className:b},g(z,null,g(j,null,g(O,{onClick:function(){return U("help")},"data-selected":"help"===k,"data-tab":"help"}),g(O,{onClick:function(){return U("support")},"data-selected":"support"===k,"data-tab":"support"}),g(O,{onClick:function(){return U("organization")},"data-selected":"organization"===k,"data-tab":"organization"})),g(y,{"data-tab":k})),g("div",null,g(_,{"data-side":x},g(C,null,g(E,null,"\u6d3b\u52d5\u306b\u53c2\u52a0\u3059\u308b\u306b\u306f\n\u3053\u3061\u3089\u306e\u4fdd\u967a\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044"),g(S,{href:"/omamori"},g(s.a,{width:"270px",height:"50px",styleType:B},"\u4fdd\u967a\u306e\u5185\u5bb9\u306f\u3053\u3061\u3089")))),"help"===k&&t,"support"===k&&e,"organization"===k&&i))}}},[["/EDR",1,0]]]);