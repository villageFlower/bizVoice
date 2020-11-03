import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QnaSolutionPageRoutingModule } from './qna-solution-routing.module';

import { QnaSolutionPage } from './qna-solution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QnaSolutionPageRoutingModule
  ],
  declarations: [QnaSolutionPage]
})
export class QnaSolutionPageModule {}
