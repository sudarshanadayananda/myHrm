import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
// import { HeaderComponent } from './navigation/header/header.component';
// import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';onent'

import { LoginComponent } from './login/login.component';
import { FrontHeaderComponent } from './front-header/front-header.component';

import { UserService } from './services/user/user.service';
@NgModule({
  declarations: [
    FooterComponent,
    //HeaderComponent,
    //SidenavListComponent,
    LoginComponent,
    FrontHeaderComponent
  ],
  imports: [
    CommonModule,
  
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    UserService
  ],
})
export class CoreModule {}
