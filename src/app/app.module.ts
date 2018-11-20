import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage }from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { CalculatorPage } from '../pages/calculator/calculator';
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath  } from '@ionic-native/file-path';

import { HttpClientModule } from '@angular/common/http';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';
import { RegisterProvider } from '../providers/register/register';
import { NgProgressModule } from 'ng2-progressbar';

import { IonicStorageModule, Storage } from '@ionic/storage';

import { GoogleMapComponent } from '../components/google-map/google-map';
import { ProfileProvider } from '../providers/profile/profile';
import { KejaProvider } from '../providers/keja/keja';
import { AddHousePage } from '../pages/add-house/add-house';
import { HousesPage } from '../pages/houses/houses';
import { SavedPropertyPage } from '../pages/saved-property/saved-property';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyHousesPage } from '../pages/my-houses/my-houses';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { ChatProvider } from '../providers/chat/chat';
import { ChatsPage } from '../pages/chats/chats';
import { DocshandlerProvider } from '../providers/docshandler/docshandler';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    //RegisterPage,
    LoginPage,
    ProfilePage,
    ChatsPage,
    GoogleMapComponent,
    SavedPropertyPage,
    TabsPage,
    CalculatorPage,
    AddHousePage,
    HousesPage,
    MyHousesPage
  ],
  imports: [
    NgProgressModule,
    RoundProgressModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name:"__Kejaa"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    SavedPropertyPage,
    GoogleMapComponent,
    AboutPage,
    ContactPage,
    CalculatorPage,
    HomePage,
    //RegisterPage,
    LoginPage,
    ProfilePage,
    TabsPage,
    AddHousePage,
    HousesPage,
    MyHousesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RegisterProvider,
    Geolocation,
    ProfileProvider,
    KejaProvider,
    FileChooser,
    FilePath,
    ImghandlerProvider,
    ChatProvider,
    DocshandlerProvider
  ]
})
export class AppModule {}
