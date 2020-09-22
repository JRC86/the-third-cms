import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThirdCmsService   {

  private apiUrl = 'https://localhost:5001/api/Cms/';
  constructor(private httpClient: HttpClient) {
      console.log("Service const");

  }

  public get<T>(apiUrl: string): Observable<T> {

    return this.httpClient.get<T>(this.apiUrl);
  }
  public post<T>(cmsItem: any): Observable<T> {
    return this.httpClient.post<T>(this.apiUrl, cmsItem);
  }

  public put<T>(cmsItem: any): Observable<T> {
    return this.httpClient.put<T>(this.apiUrl + cmsItem.id, cmsItem);
  }
  public delete<T>(cmsItem: any): Observable<T> {
    return this.httpClient.delete<T>(this.apiUrl + cmsItem.id);
  }

}
