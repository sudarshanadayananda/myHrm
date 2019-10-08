import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './core/user/user.component';
import { LoginComponent } from './core/login/login.component';
import { SignInComponent } from './core/user/sign-in/sign-in.component';

const routes: Routes = [
 
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent}]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  // Lazy Loading AdminUserModule
  { path: 'admin', loadChildren: './modules/admin-user/admin-user.module#AdminUserModule' },
  // Lazy Loading AppUserModule
  { path: 'user', loadChildren: './modules/app-user/app-user.module#AppUserModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
