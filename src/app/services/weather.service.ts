import { Injectable } from '@angular/core';
import { Weather } from '../weather';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { catchError, from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = environment.baseUrl + "WeatherForecast";

  constructor(private http: HttpClient, private authService: MsalService) { }

  private getAccessToken(): Observable<string> {
    const account = this.authService.instance.getActiveAccount();
    if (account) {
      return from(
        this.authService.instance.acquireTokenSilent({
          scopes: environment.scopeUri,
          account: account,
        })
      ).pipe(
        switchMap((response) => {
          return [response.accessToken];
        }),
        catchError((error) => {
          console.error('Token acquisition error:', error);
          throw error;
        })
      );
    } else {
      throw new Error('No active account found');
    }
  }

  getWeather(): Observable<Weather[]> {
    return this.getAccessToken().pipe(
      switchMap((token) => {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Attach the access token to the request
          }),
        };
        return this.http.get<Weather[]>(this.url, httpOptions); // Make the HTTP request
      })
    );
  }
}