import { Component, NgZone, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, ToastController, AlertController } from 'ionic-angular';
import { GoogleMapComponent } from '../../components/google-map/google-map';
import { KejaProvider } from '../../providers/keja/keja';
import { Observable } from 'rxjs';
import { House } from '../../models/house';
import { ChatsPage } from '../chats/chats';
import { AngularFirestore } from 'angularfire2/firestore';
import { ChatProvider } from './../../providers/chat/chat';
import { AuthProvider } from './../../providers/auth/auth';
import { userSettings } from './../../models/userSettings';

import {} from 'google-maps';
import 'rxjs/add/operator/mergeMap';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html',
})
export class HousesPage {

  selectedProduct;
  chatuser;
  chatpartner:any;
  docRef;
  chatfellow;
  
  public isSearchbarOpened = false;
  houses$: Observable<House[]>;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
              public afs: AngularFirestore, public authService: AuthProvider, 
              public chatService: ChatProvider, private view: ViewController,
              private ngZone: NgZone, public keja: KejaProvider,
              private alertCtrl: AlertController) {

    this.houses$ = this.keja.getCollections$(ref=>ref);

  }

  ngOnInit() {
    this.houses$ =this.keja.getCollections$(ref => ref);
    let userId = firebase.auth().currentUser.uid;
    this.afs.collection('userProfile', ref => ref.where('id', '==', userId).limit(1))
    .valueChanges().flatMap(result => result)
    .subscribe(val =>{
      let y = JSON.parse(JSON.stringify(val));
      console.log('This is the val:' + val);
      this.chatuser = val ;
      console.log( 'this is the chatuser' + JSON.stringify(this.chatuser))
    },
    (error) => {
      console.log('some error occurred somewhere!!' + error);
    },() => {
      console.log('completed!!')
    }) 
  }

  save(){
    let alert = this.alertCtrl.create({
      title: 'Success',
      message: 'Property Saved',
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
  }



chatFarmer(chatpartner){

  console.log(chatpartner);

  //this.navCtrl.push(ChatsPage);
  this.afs.collection('userProfile', ref => ref.where('id', '==', chatpartner).limit(1))
  .valueChanges().flatMap(result => result).subscribe( val => {
    let y = JSON.parse(JSON.stringify(val));
    this.chatfellow = y;
    this.chatService.currentChatPairId = this.chatService.createPairId(
      this.chatuser,
      this.chatfellow
    );

    this.chatService.currentChatPartner = this.chatfellow;
  },

  (error) => {
    console.log(error)
  },() => {console.log('complete!!')
  });
  console.log("this is the chatFellow" + JSON.stringify(this.chatfellow));
  console.log("this is the chatuser" + JSON.stringify(this.chatuser));
  this.navCtrl.push('ChatroomPage');
}



  goToChat(chatpartner){

    console.log(chatpartner)
     //query the database and push them to an array
     this.afs.collection('userProfile', ref=> ref.where('id','==',chatpartner).limit(1))
    .valueChanges()
    .flatMap(result => result)
    .subscribe(
      v=>{
         let y = JSON.parse(JSON.stringify(v));
         this.chatfellow = y;  
        console.log(JSON.stringify(v))
         
      this.chatService.currentChatPairId = this.chatService.createPairId(
      this.chatuser,
      this.chatfellow
    );

    this.chatService.currentChatPartner = this.chatfellow;
  
      },
      (error) => {
        console.log(error);
      }, () => {
        console.log('done');
      }
    )

    console.log("This is the chatfellow"+JSON.stringify(this.chatfellow))
    console.log("This is the chatuser"+JSON.stringify(this.chatuser))

   

    
    this.navCtrl.push("ChatroomPage");
  }
  enquire(){
    this.navCtrl.push(ChatsPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HousesPage');
  }
  Location(){
    this.navCtrl.push(GoogleMapComponent);
  }

}
