import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './interfaces/user';

import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) {

  }

  get() {
    let api: string = ""
    if (environment.production) {
      api = 'api/user.json'
    } else {
      api = 'assets/user.json'
    }
    return this.httpClient.get<User>(api)
  }
}
