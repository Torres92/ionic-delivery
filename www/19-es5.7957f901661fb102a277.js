function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{qiIP:function(n,e,t){"use strict";t.r(e),t.d(e,"TabsPageModule",(function(){return h}));var o,a,i,r=t("ofXK"),c=t("3Pt+"),l=t("TEn/"),u=t("tyNb"),b=t("fXoL"),s=[{path:"home",component:(o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=b.Db({type:o,selectors:[["app-tabs"]],decls:12,vars:0,consts:[["slot","bottom",1,"primary-color"],["tab","list"],["name","calendar"],["tab","map"],["name","map"]],template:function(n,e){1&n&&(b.Mb(0,"ion-tabs"),b.Mb(1,"ion-tab-bar",0),b.Mb(2,"ion-tab-button",1),b.Kb(3,"ion-icon",2),b.Mb(4,"ion-label"),b.cc(5,"Schedule"),b.Lb(),b.Mb(6,"ion-badge"),b.cc(7,"6"),b.Lb(),b.Lb(),b.Mb(8,"ion-tab-button",3),b.Kb(9,"ion-icon",4),b.Mb(10,"ion-label"),b.cc(11,"Map"),b.Lb(),b.Lb(),b.Lb(),b.Lb())},directives:[l.C,l.A,l.B,l.q,l.u,l.e],styles:[""]}),o),children:[{path:"list",children:[{path:"",loadChildren:function(){return t.e(18).then(t.bind(null,"99Un")).then((function(n){return n.HomePageModule}))}},{path:"details",loadChildren:function(){return t.e(17).then(t.bind(null,"TyDT")).then((function(n){return n.DetailsPageModule}))}}]},{path:"map",loadChildren:function(){return t.e(3).then(t.bind(null,"862v")).then((function(n){return n.MapPageModule}))}},{path:"",redirectTo:"/home/list",pathMatch:"full"}]},{path:"",redirectTo:"/home/list",pathMatch:"full"}],f=((i=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(n){return new(n||i)},imports:[[u.i.forChild(s)],u.i]}),i),h=((a=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:a}),a.\u0275inj=b.Gb({factory:function(n){return new(n||a)},imports:[[r.b,c.a,l.F,f]]}),a)}}]);