import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { AuthExtensionService } from './auth-extension.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  
  private headers: any;
  constructor(
    private http: Http) {

  }
  setHeders() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
}

  get(url: string, param?: string) {
    try {
        this.setHeders();
        if (param !== undefined) {
            url = url + param;
        }
        return this.http.get(url, { headers: this.headers }).pipe(map(this.extractData));//.catch(this.handleError);

    } catch (error) {
        console.error(error);
    }
}

post(url: string, param: any) {
    this.setHeders();
    return this.http.post(url, param, { headers: this.headers }).pipe(map(this.extractData));//.catch(this.handleError);
}
patch(url: string, param: any) {
    this.setHeders();
    return this.http.put(url, param, { headers: this.headers }).pipe(map(this.extractData));//.catch(this.handleError);
}
delete(url: string) {
    this.setHeders();
    return this.http.delete(url, { headers: this.headers }).pipe(map(this.extractData));//.catch(this.handleError);
}
private extractData(res: Response) {
    let body: any;
    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }
    if (body !== undefined) {
        return body;
    } else {
        return {};
    }
}
}