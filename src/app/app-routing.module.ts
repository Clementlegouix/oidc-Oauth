import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecuredComponent } from './secured/secured.component';
import { CallbackComponent } from './callback/callback.component';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'secured',
    component: SecuredComponent,
    canActivate: [AutoLoginPartialRoutesGuard],
  },
  { path: 'callback', component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
