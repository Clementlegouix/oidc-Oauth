import { NgModule } from "@angular/core";
import { AuthModule, LogLevel } from "angular-auth-oidc-client";

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: "url",
        redirectUrl: "https://localhost:4200/callback",
        postLogoutRedirectUri: "https://localhost:4200",
        clientId: "xxx-xxx-xxxx",
        scope: "openid uid organizations sn givenName ", // 'openid profile offline_access ' + your scopes
        responseType: "code",
        silentRenew: true,
        useRefreshToken: true,
        ignoreNonceAfterRefresh: true, // this is required if the id_token is not returned
        triggerRefreshWhenIdTokenExpired: false, // required when refreshing the browser if id_token is not updated after the first authentication
        //allowUnsafeReuseRefreshToken: true, // this is required if the refresh token is not rotated
        //autoUserInfo: false, // if the user endpoint is not supported
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
