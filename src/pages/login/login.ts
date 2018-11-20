import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { userCreds } from './../../models/userCreds';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  creds = {} as userCreds;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, 
              public loadCtrl: LoadingController, public menuCtrl: MenuController, 
              public navParams: NavParams, public authService: AuthProvider) {

                this.navCtrl = navCtrl;
                this.menuCtrl = menuCtrl;
                this.menuCtrl.enable(false, 'menu-material');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    let loader = this.loadCtrl.create({
      content:'authenticating ...'
    })
 
    try{
      loader.present();
      await this.authService.login(this.creds);
      loader.dismiss()
     this.navCtrl.setRoot(TabsPage);
    } 

    catch(error) {
     console.log(error); 
     loader.dismiss();
     let alert = this.alertCtrl.create({
      title: 'Error',
      message: 'Could Not Login',
      // bottons: ['OK']
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Account Login Failed');
          }
        }
      ]
      });
      alert.present();
    }
  }

  goToSignup() {
    this.navCtrl.setRoot("RegisterPage");
  }

}
