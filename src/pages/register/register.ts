import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { AuthProvider } from './../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';
import { AddHousePage } from '../add-house/add-house';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
   
  creds: any = {};

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController, 
              public menuCtrl: MenuController, public navParams: NavParams, 
              public authService: AuthProvider,public storage: Storage,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    let loader = this.loadCtrl.create({
      content:'Signing you in...'
    })
    try{
      this.creds.time = new Date().getTime();
      this.creds.profileImg = "https://firebasestorage.googleapis.com/v0/b/ewallet-b3646.appspot.com/o/displayPic%2FprofPic.jpeg?alt=media&token=985e2a49-ffc9-40dd-b79b-68b05d81a3ce";
      this.creds.about = "Write something about you";
      this.creds.occupation = "occupation";
      this.creds.status = "your status";
      console.log(this.creds)
      this.authService.registerUser(this.creds).then((res)=>{
      loader.dismiss();
        this.navCtrl.setRoot(ProfilePage);
      });      
      let alert = this.alertCtrl.create({
        title: 'Success',
        message: 'Account Created Successfully',
        // bottons: ['OK']
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
              console.log('Account Creation was a success');
            }
          }
        ]
        });
        alert.present();
    }
    
    catch(error){
      console.log(error);
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Could Not Register',
        // bottons: ['OK']
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
              console.log('Account Creation failed');
            }
          }
        ]
        });
        alert.present();
    }

  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

}
