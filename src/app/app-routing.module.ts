import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from 'src/app/shared/services/auth.guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: IndexComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'setup',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule)
      },
      {
        path: 'report',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'profile',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
  { path: '**', redirectTo: '/main/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
