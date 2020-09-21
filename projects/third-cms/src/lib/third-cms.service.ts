import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThirdCmsService   {

  private apiUrl = 'https://localhost:5001/Cms/';
  constructor(private httpClient: HttpClient ) {


  }

  public get<T>(apiUrl: string): void {
    this.httpClient.get(this.apiUrl).subscribe( (s) => {
      console.log(s.toString());
      return s;
    });
  }






}
