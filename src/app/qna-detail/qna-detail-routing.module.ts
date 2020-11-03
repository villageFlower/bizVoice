import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QnaDetailPage } from './qna-detail.page';

const routes: Routes = [
  {
    path: '',
    component: QnaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QnaDetailPageRoutingModule {}
