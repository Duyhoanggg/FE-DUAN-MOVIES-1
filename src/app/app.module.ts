import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutClientComponent } from './layout/base-layout-client/base-layout-client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutClientComponent,
    HomePageComponent,
    BannerComponent,
    ListMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
