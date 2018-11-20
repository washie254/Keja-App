import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KejaProvider } from '../../providers/keja/keja';
import { House } from '../../models/house';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-update-house',
  templateUrl: 'update-house.html',
})
export class UpdateHousePage {

  myHouse;
  placeholder: House;
  updateForm: FormGroup;
  houseTitle ='';
  houseRent = '';
  houseCategory = '';
  houseLocation = '';
  houseStatus = '';
  houseDesc = '';
  id= '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, public keja: KejaProvider) {
    this.myHouse = this.navParams.get("data");
    this.id = this.myHouse.id;
    this.houseTitle = this.myHouse.title;
    this.houseRent = this.myHouse.price;
    this.houseCategory =  this.myHouse.category;
    this.houseLocation = this.myHouse.location;
    this.houseStatus = this.myHouse.status;
    this.houseDesc = this.myHouse.description;
  
    
    console.log(this.myHouse.title)
    this.updateForm = new FormGroup({
      'title': new FormControl(),
      'rent': new FormControl(),
      'category': new FormControl(),
      'location': new FormControl(),
      'status': new FormControl(),
      'description':new FormControl()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateHousePage');
  }

  updateHouse(form: NgForm){
    this.keja.update(this.id, form);
    let alert = this.alertCtrl.create({
      title: 'Success',
      message: 'Property Successfully Updated',
      // bottons: ['OK']
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Property Successfully Updated');
          }
        }
      ]
      });
      alert.present();
    console.log(form, this.id);
  }

}
