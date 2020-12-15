import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent {

  map: google.maps.Map;
  @ViewChild("map", { read: ElementRef, static: false }) mapElement: ElementRef;

  constructor() { }
  /*
  
    ionViewDidLoad() {
      this.initMap()
    }
  */

  ionViewDidEnter() {
    this.initMap()
  }

  /*
    initMap(): void {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
  
    /**/
  initMap() {

    const location = new google.maps.LatLng(-17.824858, 31.053028)
    var mapProp = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp)
    //let coords = new google.maps.LatLng(45, 100);
    // let mapOptions: google.maps.MapOptions = {
    //   center: coords,
    //   zoom: 14,
    //  mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    //  this.map = new google.maps.Map(this.mapElement.nativeElement)

  }

}
