(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"862v":function(t,n,i){"use strict";i.r(n),i.d(n,"MapPageModule",(function(){return g}));var e=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),r=i("fXoL"),c=i("mrSG");const l=["map"];function d(t,n){if(1&t&&(r.Mb(0,"ion-slide"),r.Mb(1,"ion-card"),r.Mb(2,"ion-item"),r.Mb(3,"ion-thumbnail",4),r.Kb(4,"img",5),r.Lb(),r.Mb(5,"ion-label",6),r.Mb(6,"h2"),r.cc(7),r.Lb(),r.Mb(8,"p"),r.cc(9),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&t){const t=n.$implicit;r.zb(4),r.Xb("src",t.image,r.Zb),r.zb(3),r.dc(t.title),r.zb(2),r.dc(t.text)}}let p=(()=>{class t{constructor(t){this.loadingCtrl=t,this.mapRef=null,this.infoWindow=null,this.markers=[{lat:-17.386378,lng:-66.1628018,title:"Parque De la Familia",image:"https://lh5.googleusercontent.com/p/AF1QipOCgzq_0DYB9AxD-ItTG01x2csLsSfWsawBCypc=w408-h306-k-no",text:"Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?"},{lat:-17.4005556,lng:-66.1741667,title:"Mariscal Santa Cruz",image:"https://lh5.googleusercontent.com/p/AF1QipMGZeu88O8uZvFOX9PKug7gz-VRhhiXQ78hAFZU=w408-h306-k-no",text:"Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?"},{lat:-17.3810618,lng:-66.1550974,title:"Parque de Educaci\xf3n Vial",image:"https://lh5.googleusercontent.com/p/AF1QipPIXxrXfshAD6eHbkGScPdNqYBwfJ6ol4qriq2n=w408-h306-k-no",text:"Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?"},{lat:-17.4128145,lng:-66.158299,title:"Parque Kanata",image:"https://lh5.googleusercontent.com/p/AF1QipOJOq3vm1Gfpa3d4dPR_ca2C240J_PBv701zRAE=w408-h544-k-no",text:"Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?"}]}ngOnInit(){this.initMap(),this.infoWindow=new google.maps.InfoWindow}initMap(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.loadingCtrl.create();yield t.present();const n=document.getElementById("map"),i=this.markers[0];this.mapRef=new google.maps.Map(n,{center:{lat:i.lat,lng:i.lng},zoom:12}),google.maps.event.addListenerOnce(this.mapRef,"idle",()=>{t.dismiss()})}))}addMaker(t){return new google.maps.Marker({position:{lat:t.lat,lng:t.lng},map:this.mapRef,title:t.title})}loadMarkers(){this.markers.forEach(t=>{const n=this.addMaker(t);t.markerObj=n})}onSlideDidChange(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.slides.getActiveIndex(),n=this.markers[t];this.mapRef.panTo({lat:n.lat,lng:n.lng});const i=n.markerObj;this.infoWindow.setContent(n.title),this.infoWindow.open(this.mapRef,i)}))}}return t.\u0275fac=function(n){return new(n||t)(r.Jb(a.H))},t.\u0275cmp=r.Db({type:t,selectors:[["google-map"]],viewQuery:function(t,n){var i;1&t&&(r.ec(a.z,!0),r.ec(l,!0,r.l)),2&t&&(r.Yb(i=r.Ub())&&(n.slides=i.first),r.Yb(i=r.Ub())&&(n.mapElement=i.first))},decls:4,vars:1,consts:[["id","map"],["map",""],[3,"ionSlideDidChange"],[4,"ngFor","ngForOf"],["slot","start"],[3,"src"],[1,"ion-text-wrap"]],template:function(t,n){1&t&&(r.Kb(0,"div",0,1),r.Mb(2,"ion-slides",2),r.Tb("ionSlideDidChange",(function(){return n.onSlideDidChange()})),r.bc(3,d,10,3,"ion-slide",3),r.Lb()),2&t&&(r.zb(3),r.Xb("ngForOf",n.markers))},directives:[a.z,e.h,a.y,a.h,a.t,a.D,a.u],styles:["#map[_ngcontent-%COMP%]{width:100%;height:100%}ion-slides[_ngcontent-%COMP%]{height:200px;position:absolute;bottom:40px;width:100%}"]}),t})();const u=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-map"]],decls:2,vars:1,consts:[[3,"fullscreen"]],template:function(t,n){1&t&&(r.Mb(0,"ion-content",0),r.Kb(1,"google-map"),r.Lb()),2&t&&r.Xb("fullscreen",!0)},directives:[a.n,p],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#316dd0;color:#fff;padding-bottom:200px;border-radius:0 0 20% 20%}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}ion-card[_ngcontent-%COMP%]{margin-top:-180px;z-index:10;padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:40px;overflow:visible}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:240px;margin:-60px auto auto}ion-item[_ngcontent-%COMP%]{border-radius:14px;box-shadow:0 3px 45px 0 rgba(0,0,0,.08)}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-of-type{background:#ed576b;color:#fff;padding:4px;border-radius:12px}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:last-of-type{background:#316dd0;color:#fff;padding:4px;border-radius:12px}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(u)],s.i]}),t})(),b=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[e.b,a.F.forRoot()]]}),t})(),g=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[e.b,o.a,a.F,m,b]]}),t})()}}]);