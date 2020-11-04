import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitroomPageRoutingModule } from './waitroom-routing.module';

import { WaitroomPage } from './waitroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitroomPageRoutingModule
  ],
  declarations: [WaitroomPage]
})
export class WaitroomPageModule {}
