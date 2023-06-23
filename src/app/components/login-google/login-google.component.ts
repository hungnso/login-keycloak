import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakAuthService } from 'src/app/keycloak.service';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent {
  token: string = '';
  constructor(private keycloakAuthService: KeycloakAuthService) {}

  async login() {
    const authenticated = await this.keycloakAuthService.init();
    console.log(authenticated)
    if(authenticated){
      const options = {
        idpHint: 'google',
        redirectUri: window.location.origin,
      };
      this.keycloakAuthService.login()
    }
    // if (authenticated) {
    //   this.token = this.keycloakAuthService.getToken();
    //   console.log(this.token)
    // } else{
    //   console.log('chua vao dc')
    // }
  }
  logout() {
    this.keycloakAuthService.logout();
  }
}
