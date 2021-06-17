import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {HomeComponent} from './components/home/home.component';
import {AuthenticationGuard} from './guards/authentication.guard';
import {RegisterComponent} from './components/register/register.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: '', component: HomeComponent, canActivate:[AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
