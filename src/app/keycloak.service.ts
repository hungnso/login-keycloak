import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakAuthService {

  constructor(private keycloakService: KeycloakService) { }

  async init(): Promise<boolean> {
    await this.keycloakService.init({
      config: {
        url: 'https://kc.dev.unikom.vn/auth/',
        realm: 'VR4U',
        clientId: 'webapp'
      },
      initOptions: {
        onLoad: 'login-required'
      },
      bearerExcludedUrls: []
    });
    return this.keycloakService.isLoggedIn();
  }

  getToken(): string {
    return this.keycloakService.getKeycloakInstance().token || '';
  }

  logout(): void {
    this.keycloakService.logout();
  }
  login(): void{
    this.keycloakService.login();
  }
}
