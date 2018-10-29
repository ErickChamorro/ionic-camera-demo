import { Component } from '@angular/core';
import { NavController, AlertController, Platform, MenuController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CalendarPage } from '../calendar/calendar';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: string = null;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public alertCtrl: AlertController,
    public platform: Platform,
    public menuCtrl: MenuController) {
    this.platform = platform;
  }

  enviar(){
    const alerta = this.alertCtrl.create({
      title: 'Exito',
      message: 'Su imagen ha sido enviada',
      buttons: [
        {
          text: 'Aceptar',
          handler: data =>{
            this.platform.exitApp();
          }
        }
      ]
    });
    alerta.present();
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 100,
      targetHeight: 100,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error => {
      console.log( error );
    });
  }

  llevame_a_calendar(){
    this.navCtrl.push(CalendarPage);
  }

  llevame_a_mapa(){
    this.navCtrl.push(MapaPage);
  }
    
  openMenu(){
    this.menuCtrl.toggle();
  }
}
