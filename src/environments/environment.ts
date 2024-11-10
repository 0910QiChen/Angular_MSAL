// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:5054/",
  scopeUri: ["api://7d21d97d-4a56-45ce-97b7-ceb14358622e/Forecast.Read"],
  tenantId: "138c1722-d04d-4c4d-8fae-df94a8f991ae",
  uiClientId: "b04aafac-f2e2-457f-b562-52e9b731d732",
  redirectUrl: "http://localhost:4200",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
