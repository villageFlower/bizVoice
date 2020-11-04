import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrizePage } from './prize.page';

const routes: Routes = [
  {
    path: '',
    component: PrizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrizePageRoutingModule {}
