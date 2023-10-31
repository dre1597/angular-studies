import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpCacheInterceptorModule, useHttpCacheLocalStorage } from '@ngneat/cashew';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './core/pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, HttpCacheInterceptorModule.forRoot(), AppRoutingModule],
  providers: [useHttpCacheLocalStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}
