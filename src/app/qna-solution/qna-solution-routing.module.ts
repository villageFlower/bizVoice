import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QnaSolutionPage } from './qna-solution.page';

const routes: Routes = [
  {
    path: '',
    component: QnaSolutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QnaSolutionPageRoutingModule {}
