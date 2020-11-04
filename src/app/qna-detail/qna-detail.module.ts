import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QnaDetailPageRoutingModule } from './qna-detail-routing.module';
import { MyModalPageModule } from '../modals/my-modal/my-modal.module';
import { QnaDetailPage } from './qna-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QnaDetailPageRoutingModule,
    MyModalPageModule
  ],
  declarations: [QnaDetailPage]
})
export class QnaDetailPageModule {}
