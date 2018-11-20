import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { userSettings } from '../models/userSettings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SavedPropertyPage } from '../pages/saved-property/saved-property';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { GoogleMapComponent} from '../components/google-map/google-map';
import { HousesPage } from '../pages/houses/houses';
import { MyHousesPage } from '../pages/my-houses/my-houses';
import { CalculatorPage } from '../pages/calculator/calculator';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { userCreds } from '../models/userCreds';
import { AngularFireObject } from 'angularfire2/database/interfaces'; 
import { ChatsPage } from '../pages/chats/chats';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  profileData: AngularFireObject<userSettings>;

  // userCreds = {} as userCreds;  < private afData: AngularFireDatabase, >
  // userSettings = {} as userSettings;
  rootPage:any = '';
  doc;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, public storage: Storage,
              splashScreen: SplashScreen, public afAuth: AngularFireAuth,
              public afs: AngularFirestore, public menuCtrl: MenuController) {
                
  this.checklogin()    

     this.pages = [
      { title: 'Home', component: TabsPage,  icon: 'ios-home-outline'},
      { title: 'My Property', component: MyHousesPage,  icon: 'ios-basket-outline'}, 
      { title: 'Saved Property', component: SavedPropertyPage,  icon: 'ios-bookmark-outline'}, 
      { title: 'Maps', component:GoogleMapComponent, icon:"ios-map-outline" },
      { title: 'Morgage Calculator', component: CalculatorPage, icon:"ios-keypad-outline"},
      { title: 'Contact Us', component: ContactPage,icon:"ios-contacts-outline"},
      { title: 'Chat', component: ChatsPage,  icon: 'ios-chatboxes-outline'}
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  
  openPage(page) {
    this.nav.push(page.component);
  }

  logoutUser(): Promise<void> {
    this.menuCtrl.close();
    return firebase.auth().signOut();
  }

  // getUser(){

  // }

  checklogin(){
    this.afAuth.auth.setPersistence('local');
    this.afAuth.authState.subscribe(
      (user) => {
        if(!user){
          
          this.rootPage = LoginPage
          
        }else{
          this.rootPage =   TabsPage
        
        }
      }
    )
  }

}
