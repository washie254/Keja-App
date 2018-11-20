import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedPropertyPage } from './saved-property';

@NgModule({
  declarations: [
    SavedPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedPropertyPage),
  ],
})
export class SavedPropertyPageModule {}
