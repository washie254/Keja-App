import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { userSettings } from './../../models/userSettings';
import { AuthProvider } from './../../providers/auth/auth';
import { appconfig } from './../../app/app.config';
import { ChatProvider } from './../../providers/chat/chat';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  availableusers: any = [];
  chatuser;
  userDetails;
  doc;

  constructor(public navCtrl: NavController, public authService: AuthProvider, 
              public storage: Storage, public navParams: NavParams, 
              public chatService: ChatProvider, public afs: AngularFirestore) {
    
  }

  ngOnInit() {
    //fetch details of logged in user
   
    var docRef = this.afs.collection("userProfile").doc(firebase.auth().currentUser.uid);

   docRef.ref.get().then( (doc)=> {
    if (doc.exists) {
        this.chatuser = doc.data();
        console.log("Document data:",this.chatuser);
        console.log("user email",doc.data().email);

        this.storage.set("AppUser",this.chatuser);

           this.afs
        .collection<userSettings>("userProfile")
        .valueChanges()
        .subscribe(users => {
          //this.availableusers = users;
          console.log(users);
          this.availableusers = users.filter(user => {
            if (user.email != this.chatuser.email) {
              return user;
            }
            console.log(this.availableusers);
          });
        });
    
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
    console.log("Error getting document:", error);   
    });
    
  }

  goToChat(chatpartner){
    this.chatService.currentChatPairId = this.chatService.createPairId(
      this.chatuser,
      chatpartner
    );

    this.chatService.currentChatPartner = chatpartner;

    this.navCtrl.push("ChatroomPage");
  }

}
