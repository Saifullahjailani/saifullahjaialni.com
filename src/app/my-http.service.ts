import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) {

  }

  get() {
    return this.httpClient.get<User>('/assets/user.json')
  }
}
