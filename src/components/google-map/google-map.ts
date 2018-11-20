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
    // platform.ready().then(() => {
    //   this.initMap();
    // });
  }
  // markers = [];
  // initMap() {
  //   this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
  //     let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //       zoom: 15,
  //       center: mylocation
  //     });
  //   });
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     this.deleteMarkers();
  //     let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
  //     let image = 'assets/med4.png';
  //     this.addMarker(updatelocation,image);
  //     this.setMapOnAll(this.map);
  //   });
  // }
  // addMarker(location, image) {
  //   let marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map,
  //     icon: image
  //   });
  //   this.markers.push(marker);
  // }
  
  // setMapOnAll(map) {
  //   for (var i = 0; i < this.markers.length; i++) {
  //     this.markers[i].setMap(map);
  //   }
  // }
  
  // clearMarkers() {
  //   this.setMapOnAll(null);
  // }
  
  // deleteMarkers() {
  //   this.clearMarkers();
  //   this.markers = [];
  // }

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
      icon:"assets/med4.png",
      title: 'Jonka Real Estate '
    })

    let marker2: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-0.421393, 36.951885 ),
      icon:"assets/med4.png",
      title: 'Jesma Investments'
    })

    let marker3: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-0.422059, 36.951295 ),
      icon:"assets/med4.png",
      title: 'Quiver Real Estates'
    })

    let marker4: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-0.422338, 36.953580 ),
      icon:"assets/med4.png",
      title: 'Onuscare Real Estates'
    })

    let marker5: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-0.420150, 36.948938 ),
      icon:"assets/med4.png",
      title: 'Kiawara land Dealers'
    })

    let marker6: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-0.423818, 36.954843),
      icon:"assets/med4.png",
      title: 'Njuguna and sons investment'
    })

    let marker7: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(-0.426028, 36.595768),
      icon:"assets/med4.png",
      title: 'Mathai Estates'
    })
    
  }
 
}
