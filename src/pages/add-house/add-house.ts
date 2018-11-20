import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { House } from '../../models/house';
import { KejaProvider } from '../../providers/keja/keja';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ImghandlerProvider} from '../../providers/imghandler/imghandler';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { NgProgressService } from'ng2-progressbar';

@IonicPage()
@Component({
  selector: 'page-add-house',
  templateUrl: 'add-house.html',
})
export class AddHousePage {

  house: FormGroup;
  imgUrl = "./../../assets/imgs/upload.ico";
  downloadUrl;
  progress: {percentage:number}={percentage: 0}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private alertCtrl: AlertController,public keja: KejaProvider,
              public zone: NgZone, private pService:NgProgressService,
              public loadCtrl: LoadingController,public imgservice: ImghandlerProvider) {
    this.house = new FormGroup({
      title: new FormControl(), 
      description: new FormControl(),
      rent:new FormControl(),
      category: new FormControl(),
      location: new FormControl(),
      status: new FormControl(),
    })
  }

  // run(){
  //   this.pService.start();
  //   setTimeout(()=>{
  //     this.pService.done()
  //   },2000)
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHousePage');
  }

  

  uploadimg(event){
    // create a reference to the firebase storage   
  const file: File = event.target.files[0];
  
  const metadata = {'contentType': file.type};
  const path = `Houses/${new Date().getTime()}_${file.name}`;
  const bucketStore = firebase.storage().ref(path);
  

  const uploadTask=bucketStore.put(file,metadata);

  console.log("uploading", file.name);
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
    this.progress.percentage = Math.round((uploadSnapshot.bytesTransferred/uploadSnapshot.totalBytes)*100)
    console.log(this.progress.percentage)
  })

  uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
    const percentage = uploadSnapshot.bytesTransferred / uploadSnapshot.totalBytes * 100
    bucketStore.getDownloadURL().then((url)=>{
    this.downloadUrl = url
    console.log(this.downloadUrl)
    })
  
  })

  return this.downloadUrl

}

  addHouse(){
    const user_id = firebase.auth().currentUser.uid;;
    const imgUrl = this.downloadUrl;
    const title = this.house.get('title').value;
    const rent = this.house.get('rent').value;
    const category = this.house.get('category').value;
    const location = this.house.get('location').value;
    const status = this.house.get('status').value;
    const description = this.house.get('description').value;
    this.keja.add(user_id,imgUrl,title,rent,category,location,status,description);
    
    let alert = this.alertCtrl.create({
      title: 'Success',
      message: 'Property Successfully Added',
      // bottons: ['OK']
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Property Successfully Added');
          }
        }
      ]
      });
      alert.present();
  }

}
