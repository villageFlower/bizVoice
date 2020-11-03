import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QnaDetailPageRoutingModule } from './qna-detail-routing.module';

import { QnaDetailPage } from './qna-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QnaDetailPageRoutingModule
  ],
  declarations: [QnaDetailPage]
})
export class QnaDetailPageModule {}
