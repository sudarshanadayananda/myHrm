import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule} from '../../shared/modules/material-module';
import { CoreModule } from '../../core/core.module';
import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NavigationlistAdminComponent } from './navigationlist-admin/navigationlist-admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddUserComponent,
    NavigationlistAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    AdminRoutingModule
  ]
  
})
export class AdminUserModule { }
