import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  image: string;

  constructor(
    private geolocation: Geolocation,
    private camera: Camera,
    private webView: WebView
  ) { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    this.geolocation.getCurrentPosition()
    .then(response => {
      console.log(response);
    });
  }

  takePicture() {
    // tslint:disable-next-line:max-line-length
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      cameraDirection: this.camera.Direction.FRONT,
    };
    this.camera.getPicture(options)
    .then(imageData => {
      imageData = this.webView.convertFileSrc(imageData);
      this.image = imageData;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
