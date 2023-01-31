import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';


const routes: Routes = [
  {path:'',
  component :LayoutComponent,
  canActivateChild:[AdminGuard],

  children:[
    {path:'',
    loadChildren: () => import(`./products/products.module`).then(m => m.ProductsModule)
    },

    {path:'',
    loadChildren: () => import(`./users/users.module`).then(m => m.UsersModule)
    },

    {path:'',
    loadChildren: () => import(`./carts/carts.module`).then(m => m.CartsModule)
    },
    // {path:"products",component:AllProductsComponent},
    // {path:"details",component:ProductsDetilsComponent},
    // {path:"cart",component:CartsComponent},
    // {path:"**",redirectTo:"products", pathMatch:"full"}

]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
