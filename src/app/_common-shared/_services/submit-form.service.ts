import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
  public _loginStat: boolean;
  public _loginUrl: string;
  public authToken: string;
  constructor(public _httpClient: HttpClient) {
  }
  _login(url: string, formdata: FormData) {
    const header = new HttpHeaders()
      .append('Authorization', `${this._loadToken()}`)
      .append('Content-Type', 'application/json; charset=utf-8')
      .append('Access-Control-Allow-Origin', '*');
    return this._httpClient.post(url, formdata, { headers: header });
  }

  _loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  _checkLogin() {
    return this._httpClient.get(this._loginUrl);
  }
  _logout() {
    localStorage.clear();
    this._loginStat = false;
  }
}
