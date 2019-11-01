import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule} from '../../shared/material-module';
import { CoreModule } from '../../core/core.module';
import { NavigationlistAdminComponent } from './navigationlist-admin/navigationlist-admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddUserComponent,
    NavigationlistAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule, 
    ReactiveFormsModule
  ]
  
})
export class AdminUserModule { }
