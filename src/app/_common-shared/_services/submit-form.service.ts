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

  // Post data to server with url
  _postData(url: string, formdata: FormData) {
    const header = new HttpHeaders()
      .append('Authorization', `${this._loadToken()}`);
    return this._httpClient.post(url, formdata, { headers: header });
  }

  // Get data from server with url
  _getData(url: string) {
    const header = new HttpHeaders()
      .append('Authorization', `${this._loadToken()}`);
    return this._httpClient.get(url, { headers: header });
  }

  // Get Authentication from local storage
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
