import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PlatformSetService } from './services/platform-set.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private platformSet: PlatformSetService,
    private router: Router
  ) {
    this.initializeApp();
  }

  isMobile: Boolean;

  initializeApp() {
    this.isMobile = this.platform.is('mobileweb') || this.platform.is('mobile');
    this.platformSet.isMobile = this.isMobile;
    console.log("platform: ", (this.isMobile ? "mobile" : "mobileweb"));

    if (this.isMobile)
      this.router.navigate(["mobile/home-mobile"], {replaceUrl: true});
    else
      this.router.navigate([""], {replaceUrl: true});
  }
}
