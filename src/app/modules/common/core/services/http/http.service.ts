import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get(url: string) {
    console.log("http call for GET:" + url); 
  }
}
