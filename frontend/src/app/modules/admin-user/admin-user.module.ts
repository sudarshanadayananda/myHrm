import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModule} from '../../../material-module';
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
    CoreModule
  ]
  
})
export class AdminUserModule { }
