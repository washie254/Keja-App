import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSettings } from './../../models/userSettings';
import { appconfig } from './../../app/app.config';
import { Chat } from './../../models/chat.model';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';


@Injectable()
export class ChatProvider {
  users: AngularFirestoreCollection<userSettings>;
  private userDoc: AngularFirestoreDocument<userSettings>;

  chats: AngularFirestoreCollection<Chat>;
  private chatDoc: AngularFirestoreDocument<Chat>;

  //the pair string of 2 users currently chatting
  currentChatPairId;
  currentChatPartner;

  constructor(private db: AngularFirestore) {
    this.users = db.collection<userSettings>(appconfig.users_endpoint);
    this.chats = db.collection<Chat>(appconfig.chats_endpoint);
  }

  addChat(chat: Chat) {
    return this.chats.add(chat);
  }

  createPairId(user1, user2) {
    let pairId;
    console.log(user1.time, user2.time);
    if (user1.time < user2.time) {
      pairId = `${user1.email}|${user2.email}`;
    } else {
      pairId = `${user2.email}|${user1.email}`;
    }

    return pairId;
  } //createPairString

}
