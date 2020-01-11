import { RoomPagePageModule } from './../room-page/room-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoomsPagePage } from './rooms-page.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
    RouterModule.forChild(routes)
  ],
  declarations: [RoomsPagePage]
})
export class RoomsPagePageModule {}
