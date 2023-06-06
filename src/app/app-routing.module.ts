import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutClientComponent } from './layout/base-layout-client/base-layout-client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BaseLayoutAuthComponent } from './layout/base-layout-auth/base-layout-auth.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {path:'',component:BaseLayoutClientComponent,children:[
    {path:'',component:HomePageComponent}
  ]},
  {path:'',component:BaseLayoutAuthComponent,children:[
    {path:'login',component:LoginPageComponent},
    {path: 'signup',component:SignupPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
