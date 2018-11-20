import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousesPage } from './houses';

@NgModule({
  declarations: [
    HousesPage,
  ],
  imports: [
    IonicPageModule.forChild(HousesPage),
  ],
})
export class HousesPageModule {}
