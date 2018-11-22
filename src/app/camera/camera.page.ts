import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  image: string;

  constructor(
    private camera: Camera,
    private webView: WebView,
    private socialSharing: SocialSharing,
    private platform: Platform
  ) { }

  ngOnInit() {
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
    .then(imageFile => {
      imageFile = this.webView.convertFileSrc(imageFile);
      this.image = imageFile;
    })
    .catch(error => {
      console.log(error);
    });
  }

  share() {
    const iselectron = this.platform.is('electron');
    const options = {
      message: 'Hola',
      subject: 'the subject',
      files: this.image,
      url: 'https://www.website.com/foo/#bar?a=b',
    };
    this.socialSharing.shareWithOptions(options)
    .catch(error => {
      console.log(error);
    });
  }

}
