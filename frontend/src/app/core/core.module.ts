import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {}
