import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SavedPropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saved-property',
  templateUrl: 'saved-property.html',
})
export class SavedPropertyPage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedPropertyPage');
  }

  remove(){
    let alert = this.alertCtrl.create({
      title: 'Remove',
      message: 'Property Removed',
      // bottons: ['OK']
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Property Removed !');
          }
        }
      ]
      });
      alert.present();
  }

}
