import { Component, ViewChild } from '@angular/core';
import { convertUrlToDehydratedSegments } from 'ionic-angular/umd/navigation/url-serializer';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform } from 'ionic-angular';
import {} from '@types/googlemaps';


declare var google;
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
 
export class GoogleMapComponent {

  @ViewChild("map") mapElement;

  map: any;
  constructor(public navCtrl: NavController, public platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.initMap();
    });
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){
     // LATS LNG : Nyeri Cordinates: -.4169, 36.951  Nairobi Coords:  -1.2833, 36.8167

    let coords =  new google.maps.LatLng(-0.422338, 36.953580 );

    let mapOptions: google.maps.MapOptions  = {
      center: coords,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement,
      mapOptions)

    let marker : google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords,
      icon:"assets/hm.png",
      title: 'Nyeri General hospital '
    })
    
    let marker7: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-0.426028, 36.595768),
      icon:"assets/hm.png",
      title: 'A great Clinic'
    })
    
  }
 
}
