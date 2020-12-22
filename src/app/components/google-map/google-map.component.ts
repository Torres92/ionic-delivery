import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular'

declare var google: any;


interface Marker {
  lat: number;
  lng: number;
  title: string;
  image: string;
  text: string;
  markerObj?: any;
}

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {

  map: google.maps.Map;
  mapRef = null;
  infoWindow = null
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild("map", { read: ElementRef, static: false }) mapElement: ElementRef;
  markers: Marker[] = [
    {
      lat: -17.386378,
      lng: -66.1628018,
      title: 'Parque De la Familia',
      image: 'https://lh5.googleusercontent.com/p/AF1QipOCgzq_0DYB9AxD-ItTG01x2csLsSfWsawBCypc=w408-h306-k-no',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    },
    {
      lat: -17.4005556,
      lng: -66.1741667,
      title: 'Mariscal Santa Cruz',
      image: 'https://lh5.googleusercontent.com/p/AF1QipMGZeu88O8uZvFOX9PKug7gz-VRhhiXQ78hAFZU=w408-h306-k-no',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    },
    {
      lat: -17.3810618,
      lng: -66.1550974,
      title: 'Parque de Educación Vial',
      image: 'https://lh5.googleusercontent.com/p/AF1QipPIXxrXfshAD6eHbkGScPdNqYBwfJ6ol4qriq2n=w408-h306-k-no',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    },
    {
      lat: -17.4128145,
      lng: -66.158299,
      title: 'Parque Kanata',
      image: 'https://lh5.googleusercontent.com/p/AF1QipOJOq3vm1Gfpa3d4dPR_ca2C240J_PBv701zRAE=w408-h544-k-no',
      text: 'Animi voluptatem, aliquid impedit ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
    }
  ];



  constructor(
    private loadingCtrl: LoadingController
  ) {
   }
  /*
  
    ionViewDidLoad() {
      this.initMap()
    }
  */
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initMap()
    this.infoWindow = new google.maps.InfoWindow();
 
  }

  /*
    initMap(): void {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
  
    /**/
  // initMap() {

  //   const location = new google.maps.LatLng(-17.824858, 31.053028)
  //   var mapProp = {
  //     center: location,
  //     zoom: 15,
  //     disableDefaultUI: true
  //     // mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }

  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp)
  //   //let coords = new google.maps.LatLng(45, 100);
  //   // let mapOptions: google.maps.MapOptions = {
  //   //   center: coords,
  //   //   zoom: 14,
  //   //  mapTypeId: google.maps.MapTypeId.ROADMAP
  //   // }

  //   //  this.map = new google.maps.Map(this.mapElement.nativeElement)

  // }
  async initMap() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const mapEle: HTMLElement = document.getElementById('map')
    const marker = this.markers[0]
    this.mapRef = new google.maps.Map(mapEle, {
      center: { lat: marker.lat, lng: marker.lng },
      zoom: 12
    });
    google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss()
      })
    //let coords = new google.maps.LatLng(45, 100);
    // let mapOptions: google.maps.MapOptions = {
    //   center: coords,
    //   zoom: 14,
    //  mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    //  this.map = new google.maps.Map(this.mapElement.nativeElement)

  }


  private addMaker(itemMarker: Marker) {
    const marker = new google.maps.Marker({
      position: { lat: itemMarker.lat, lng: itemMarker.lng },
      map: this.mapRef,
      title: itemMarker.title
    });
    return marker;
  }

  private loadMarkers() {
    this.markers.forEach(marker => {
      const markerObj = this.addMaker(marker);
      marker.markerObj = markerObj;
    });
  }

  async onSlideDidChange() {
    const currentSlide = await this.slides.getActiveIndex();
    const marker = this.markers[currentSlide];
    this.mapRef.panTo({ lat: marker.lat, lng: marker.lng });

    const markerObj = marker.markerObj;
    this.infoWindow.setContent(marker.title);
    this.infoWindow.open(this.mapRef, markerObj);
  }



}
