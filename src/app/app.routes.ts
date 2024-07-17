import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './landingpage/contact-us/contact-us.component';
import { DownbarComponent } from './landingpage/downbar/downbar.component';
import { WallpaperComponent } from './landingpage/wallpaper/wallpaper.component';
import { Shop1Component } from './landingpage/shop1/shop1.component';
import { Shop2Component } from './landingpage/shop2/shop2.component';
import { Shop3Component } from './landingpage/shop3/shop3.component';
import { Shop4Component } from './landingpage/shop4/shop4.component';
import { Shop5Component } from './landingpage/shop5/shop5.component';
import { Shop6Component } from './landingpage/shop6/shop6.component';
import { Shop7Component } from './landingpage/shop7/shop7.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    children: [
      { path: 'contact', component: ContactUsComponent },
      { path: 'downbar', component: DownbarComponent },
      { path: 'wallpaper', component: WallpaperComponent },
      { path: 'shop1', component: Shop1Component },
      { path: 'shop2', component: Shop2Component },
      { path: 'shop3', component: Shop3Component },
      { path: 'shop4', component: Shop4Component },
      { path: 'shop5', component: Shop5Component },
      { path: 'shop6', component: Shop6Component },
      { path: 'shop7', component: Shop7Component },
    ],

  },
  {path: 'authentication/login', component: LoginComponent}
];
