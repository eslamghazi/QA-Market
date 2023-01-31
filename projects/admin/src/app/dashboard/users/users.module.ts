import { UserComponent } from './components/user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [

    SharedModule,
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
