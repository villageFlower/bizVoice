import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').then( m => m.RegPageModule)
  },
  {
    path: 'query',
    loadChildren: () => import('./query/query.module').then( m => m.QueryPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'forgetpw',
    loadChildren: () => import('./forgetpw/forgetpw.module').then( m => m.ForgetpwPageModule)
  },
  {
    path: 'qna-detail',
    loadChildren: () => import('./qna-detail/qna-detail.module').then( m => m.QnaDetailPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./modals/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'waitroom',
    loadChildren: () => import('./waitroom/waitroom.module').then( m => m.WaitroomPageModule)
  },  {
    path: 'prize',
    loadChildren: () => import('./prize/prize.module').then( m => m.PrizePageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
