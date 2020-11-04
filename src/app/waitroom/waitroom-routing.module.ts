import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitroomPage } from './waitroom.page';

const routes: Routes = [
  {
    path: '',
    component: WaitroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitroomPageRoutingModule {}
