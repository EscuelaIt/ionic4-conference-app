import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    this.loadMap(myLatLng);
  }

  async loadMap(myLatLng) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.map, 'idle', async () => {
      console.log('mapa cargado');
      await loading.dismiss();
      this.addMarker(myLatLng);
    });
  }

  private addMarker(myLatLng) {
    const marker = new google.maps.Marker({
      position: {
        lat: myLatLng.lat,
        lng: myLatLng.lng
      },
      zoom: 8,
      map: this.map,
      title: 'Hello World!'
    });
  }

}
