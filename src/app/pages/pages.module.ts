import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { TabsPageModule } from './tabs/tabs.module';




@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    TabsPageModule
  ],
  exports: [
    
  ]
})
export class PagesModule { }
