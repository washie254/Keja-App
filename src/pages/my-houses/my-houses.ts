import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { KejaProvider } from '../../providers/keja/keja';
import { Observable } from 'rxjs/Observable';
import { House } from '../../models/house';
import { AddHousePage } from '../add-house/add-house';
import {AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-my-houses',
  templateUrl: 'my-houses.html',
})
export class MyHousesPage {
  myHouses$: Observable<House>;
  userId;
  temp;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public keja: KejaProvider, private alertCtrl: AlertController) {
    this.userId = firebase.auth().currentUser.uid;
    // this.userId = 'Y05heKvxQQeDttJonGnujD7MRkP2';
    // this.myHouses$ = this.keja.getUserProducts(this.userId).valueChanges();
    this.temp = this.keja.getUserProducts(this.userId);
    this.myHouses$ = this.temp.valueChanges();
  
    console.log(this.myHouses$);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyHousesPage');
  }

  deleteHouse(id){
    this.keja.delete(id);
    let alert = this.alertCtrl.create({
      title: 'Success',
      message: 'Property Successfully Deleted',
      // bottons: ['OK']
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Property was deleted successfully');
          }
        }
      ]
      });
      alert.present();

  }

  update(myhouse){
    this.navCtrl.push("UpdateHousePage",{data: myhouse});
  }

  addHouse(){
    this.navCtrl.push(AddHousePage);
  }

}
