import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { QueryFn } from 'angularfire2/firestore/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { House } from '../../models/house';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable()
export class KejaProvider {
  // document name
  readonly path = "Houses";
  constructor(public afs: AngularFirestore) {
    console.log('Hello KejaProvider Provider');
  }

  add(user_id:string,imgUrl:string,title:string,price:number, category:string, location:string, status:string, description:string,): Promise<void>{
    const houseId: string = this.afs.createId();
    return this.afs.doc<House>(`Houses/${houseId}`)
    .set({
      id:houseId,
      user_id,
      imgUrl,
      title,
      price,
      category,
      location,
      status,
      description,
    })
  }

  // update functino
  update(id: string, data): Promise<void>{
    return this.afs.doc<House>(`Houses/${id}`).update(data);
  }

  //delete functino 
  delete(id:string): Promise<void>{
    return this.afs.doc<House>(`Houses/${id}`).delete();
  }

  //get a single document 
  getCollections$(ref?: QueryFn): Observable<House[]> {
    return this.afs.collection<House>(this.path, ref)
    .snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as House;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }

  // get user houses
  getUserProducts(userId: string): AngularFirestoreCollection<House> {
    return this.afs.collection<House>('Houses',
    ref => 
      ref.where('user_id', '==',userId)
    );
  }
}
