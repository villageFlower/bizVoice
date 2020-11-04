import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrizePageRoutingModule } from './prize-routing.module';

import { PrizePage } from './prize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrizePageRoutingModule
  ],
  declarations: [PrizePage]
})
export class PrizePageModule {}
