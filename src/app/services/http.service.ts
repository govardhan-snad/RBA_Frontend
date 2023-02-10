import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ApiUrl = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) {}
  getData(url: string) {
    return this.http.get(`${this.ApiUrl}${url}`);
  }
  postdata(url: string, data: any) {
    return this.http.post(`${this.ApiUrl}${url}`, data);
  }
}
