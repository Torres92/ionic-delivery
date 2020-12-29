import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'

import { Plugins } from '@capacitor/core'
import { Map, tileLayer, marker } from 'leaflet'
import { Observable } from 'rxjs';
import { title } from 'process';


const { Geolocation } = Plugins;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: Map;
  marker: any;
  latLong = [];

  constructor(
    public loadingCtrl: LoadingController
  ) {
    //  this.getCurrentPosition()
  }


  // async getCurrentPosition() {
  //   const coordinates = await Geolocation.getCurrentPosition();


  //   return new Observable((observer) => {
  //     Geolocation.watchPosition({}, (position, err) => {
  //       console.log('err: ', err);
  //       console.log('Changed: ', position)
  //       observer.next(position)
  //     })
  //   }
  //   )
  // }

  // async getCurrentPosition() {
  //   const coordinates = await Geolocation.getCurrentPosition(
  //     {
  //       enableHighAccuracy: true
  //     }
  //   );

  //   this.latLong = [
  //     coordinates.coords.latitude,
  //     coordinates.coords.longitude
  //   ]
  //   console.log('hey current POsition', this.latLong)
  //   if (this.marker) {
  //     this.marker.remove();
  //     console.log('hey removeee')
  //     this.showMarker(this.latLong);
  //   } else {
  //     this.showMarker(this.latLong);
  //   };

  //   // const watch = Geolocation.watchPosition({}, (position, err) => {
  //   //   console.log('err: ', err);
  //   //   console.log('Changed: ', position)
  //   // })
  // }

  ngOnInit() {
  }


  ionViewDidEnter() {
    // this.initMap()
    this.showMap()
  }



  async showMap() {
    if (this.latLong.length > 0) return
    const loading = await this.loadingCtrl.create();
    await loading.present();
    
    var lat = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    })
    this.latLong = [
      lat.coords.latitude,
      lat.coords.longitude
    ]

    this.map = new Map('mapid').setView(this.latLong, 10);
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = tileLayer(tileUrl, { attribution });
    tiles.addTo(this.map)
    this.showMarker(this.latLong)
    this.loadingCtrl.dismiss();
    // tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9ycmVzOTIiLCJhIjoiY2tqOTBpbXQyMTN1MTJ2cWkzMjN2bWprYSJ9.w_4ycq-hG59z64nHo5CvZQ', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/clight-v9opyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1,
    //     accessToken: 'pk.eyJ1IjoidG9ycmVzOTIiLCJhIjoiY2tqOTBpbXQyMTN1MTJ2cWkzMjN2bWprYSJ9.w_4ycq-hG59z64nHo5CvZQ'
    //   }).addTo(this.map);
    //  tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
    // this.getCurrentPosition()
  }

  showMarker(latLong) {
    //console.log('hey show markerrrr', latLong)
    this.marker = marker(latLong, 15);
    this.marker.addTo(this.map)
      .bindPopup('Mi ubicación actual').openPopup();
    this.map.setView(latLong);
    // new this.map.routing
  }

  getPositions() {
    Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      console.log('hey resss', res)
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ]
    })
      .then((latlng) => {
        if (this.marker) {
          this.marker.remove();
          this.showMarker(latlng);
        } else {
          this.showMarker(latlng);
        };
      });
  }


  //   async initMap() {
  //     const loading = await this.loadingCtrl.create();
  //     await loading.present();

  //     this.map= new Map('mapid').setView([12.0078524, -77.0449321, 15], 13);
  //  //   this.loadingCtrl.dismiss()
  //    // tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map)
  //     tileLayer('https://api.mapbox.com/tilesets/v1/sources/torres92/hello-world?access_token=pk.eyJ1IjoidG9ycmVzOTIiLCJhIjoiY2tqOTBpbXQyMTN1MTJ2cWkzMjN2bWprYSJ9.w_4ycq-hG59z64nHo5CvZQ', {
  //       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //       maxZoom: 18,
  //       id: 'mapbox/streets-v11',
  //       tileSize: 512,
  //       zoomOffset: -1,
  //       accessToken: 'pk.eyJ1IjoidG9ycmVzOTIiLCJhIjoiY2tqOTBpbXQyMTN1MTJ2cWkzMjN2bWprYSJ9.w_4ycq-hG59z64nHo5CvZQ'
  //     }).addTo(this.map);
  //     loading.dismiss()
  //     // const marker = this.markers[0]
  //     // this.mapRef = new google.maps.Map(mapEle, {
  //     //   center: { lat: marker.lat, lng: marker.lng },
  //     //   zoom: 12
  //     // });
  //     // google.maps.event
  //     //   .addListenerOnce(this.mapRef, 'idle', () => {
  //     //     loading.dismiss()
  //     //   })
  //     //let coords = new google.maps.LatLng(45, 100);
  //     // let mapOptions: google.maps.MapOptions = {
  //     //   center: coords,
  //     //   zoom: 14,
  //     //  mapTypeId: google.maps.MapTypeId.ROADMAP
  //     // }

  //     //  this.map = new google.maps.Map(this.mapElement.nativeElement)

  //   }


}
