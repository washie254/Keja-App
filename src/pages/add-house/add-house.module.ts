import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHousePage } from './add-house';

@NgModule({
  declarations: [
    AddHousePage,
  ],
  imports: [
    IonicPageModule.forChild(AddHousePage),
  ],
})
export class AddHousePageModule {}
