import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
   p; //principal amount
   r; //rate
   n; //number of payments
   result;
   rt;
   t;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }
 

 calculate(){
 var p = parseInt(this.p);
 var r = parseInt(this.r);
 var n = parseInt(this.n);
 this.rt = r/100;

  this.result = p*((this.rt*(1+this.rt)*n)/((1+this.rt)*n));
  var t = this.result.toFixed(2);
  console.log(this.result);

  let alert = this.alertCtrl.create({
    title: `Monthly Loan Payment`,
    message: t,
    buttons: ['Okay']
  });
  alert.present();
 }


 clear(){

  }
}
