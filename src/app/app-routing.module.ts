import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


/* import { AuthGuard } from '@auth0/auth0-angular'; */

const routes: Routes = [
  {path: 'public', component: LoginComponent},
  {path: 'private', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'public', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
