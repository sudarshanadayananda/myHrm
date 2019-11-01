import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';
import { NavigationHeaderComponent } from '../shared/components/navigation-header/navigation-header.component';

import { LoginComponent } from './login/login.component';
import { FrontHeaderComponent } from './front-header/front-header.component';

import { UserService } from './services/user/user.service';
@NgModule({
  declarations: [
    FooterComponent,
    LoginComponent,
    FrontHeaderComponent,
    NavigationHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    NavigationHeaderComponent
  ],
  providers: [
    UserService
  ],
})
export class CoreModule {}
