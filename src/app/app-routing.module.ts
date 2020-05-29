import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'Head', loadChildren: () => import('./pages/head/head.module').then(m => m.HeadModule) },
 { path: 'Login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'Home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'Error', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule) },
 { path: '**', redirectTo: 'Error'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
