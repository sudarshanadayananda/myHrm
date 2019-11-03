import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { MaterialModule } from '../../shared/modules/material-module';
import { UserRoutingModule } from './user-routing.module';

import { HomeComponent } from './home/home.component';
import { NavigationlistAppuserComponent } from './navigationlist-appuser/navigationlist-appuser.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavigationlistAppuserComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    CoreModule
  ],
  
})
export class AppUserModule { }
