import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return () =>
    keycloak.init({
      config: {
        url: 'https://kc.dev.unikom.vn/auth/',
        realm: 'VR4U',
        clientId: 'webapp',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
        flow: 'implicit',
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets', '/clients/public'],
    });
}