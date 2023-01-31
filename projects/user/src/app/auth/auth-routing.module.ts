import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevuserGuard } from '../core/guards/prev-user.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate:[PrevuserGuard],
  },
  {
    path:'Register',
    component:RegisterComponent,
    canActivate:[PrevuserGuard],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
