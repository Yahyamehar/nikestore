import { Component, HostListener } from '@angular/core';
import { MidSaleBannerComponent } from "./midsaller/midsaller.component";
import { DownbarComponent } from "./downbar/downbar.component";
import { WallpaperComponent } from "./wallpaper/wallpaper.component";
import { Shop1Component } from "./shop1/shop1.component";
import { Shop2Component } from "./shop2/shop2.component";
import { Shop3Component } from "./shop3/shop3.component";
import { Shop4Component } from "./shop4/shop4.component";
import { Shop5Component } from "./shop5/shop5.component";
import { Shop6Component } from "./shop6/shop6.component";
import { Shop7Component } from "./shop7/shop7.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './landingpage.component.html',
    styleUrl: './landingpage.component.css',
    imports: [MidSaleBannerComponent,RouterOutlet, DownbarComponent, WallpaperComponent, Shop1Component, Shop2Component, Shop3Component, Shop4Component, Shop5Component, Shop6Component, Shop7Component, ContactUsComponent]
})
export class LandingpageComponent {

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.clientHeight : 0;
    this.isSticky = window.pageYOffset >= navbarHeight;
  }

}
