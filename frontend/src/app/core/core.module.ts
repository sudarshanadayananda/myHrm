import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/modules/material-module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FrontHeaderComponent } from './front-header/front-header.component';
import { NavigationHeaderComponent } from '../shared/components/navigation-header/navigation-header.component';

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
  providers: [],
})
export class CoreModule {}
