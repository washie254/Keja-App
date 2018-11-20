import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage { 

    user = {
    name: '',
    profileImage: '',
    occupation: '',
    description: '',
    email: '',
    status: ''
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public storage: Storage) {
    // this.checkDetails();
  }

  ionViewDidLoad() {
    // let toast = this.toastCtrl.create({
    //   message: 'User was added successfully',
    //   duration: 3000,
    //   position: 'top'
    // });
    // toast.present();
    console.log('ionViewDidLoad ProfilePage');
  }

  // checkDetails(){
  //   this.storage.get('userData')
  // .then((data) => {
  //   this.user.name = data.username,
  //   this.user.profileImage = data.profileImage,
  //   this.user.occupation = data.occupation,
  //   this.user.description = data.about,
  //   this.user.email = data.email,
  //   this.user.status = data.status
  // }
  // );
  // }

}


