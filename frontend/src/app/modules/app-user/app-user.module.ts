import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../../material-module';
import { CoreModule } from '../../core/core.module';
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
