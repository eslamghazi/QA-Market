import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:"/carts", pathMatch:'full'},

  {path:'',
  loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
  },

  {path:'',
  loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  },
  {path:'**', redirectTo:"/carts", pathMatch:'full'},

  // { path: '**', pathMatch: 'full',
  // component: PagenotfoundComponent },
    //  {path:"**",redirectTo:"products", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
