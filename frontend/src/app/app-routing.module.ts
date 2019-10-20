import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
 
  {
    path: 'login', component: LoginComponent,
    // children: [{ path: '', component: SignInComponent}]
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
