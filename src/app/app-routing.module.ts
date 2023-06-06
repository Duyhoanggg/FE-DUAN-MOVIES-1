import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutClientComponent } from './layout/base-layout-client/base-layout-client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:BaseLayoutClientComponent,children:[
    {path:'',component:HomePageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
