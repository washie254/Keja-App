import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {HousesPage} from '../houses/houses';
import { GoogleMapComponent} from '../../components/google-map/google-map';
import { ProfilePage } from '../profile/profile';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HousesPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = GoogleMapComponent;
  tab5Root = ProfilePage;

  constructor(public menuCtrl: MenuController,public navCtrl: NavController) {
    this.navCtrl = navCtrl;
                this.menuCtrl = menuCtrl;
                this.menuCtrl.enable(true, 'menu-material');
  }
}
