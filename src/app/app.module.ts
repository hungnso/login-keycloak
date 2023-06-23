import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


import { AppComponent } from './app.component';
import { LoginGoogleComponent } from './components/login-google/login-google.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { KeycloakAuthService } from './keycloak.service';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'VR4U',
        url: 'https://kc.dev.unikom.vn/auth/',
        clientId: 'webapp',
       
        
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}
@NgModule({
  declarations: [
    AppComponent,
    LoginGoogleComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  // providers: [
  //   {
  //     provide: KeycloakService,
  //     useValue: new KeycloakService()
  //   },
  //   KeycloakAuthService
  // ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
