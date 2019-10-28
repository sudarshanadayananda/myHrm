import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule} from '../../../material-module';

@NgModule({
  declarations: [
    HomeComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  
})
export class AdminUserModule { }
