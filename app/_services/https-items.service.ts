import { Injectable } from '@angular/core';
import { AbstractitemsService } from './abstractitems.service';
import { Observable } from 'rxjs/internal/Observable';
import { observable } from 'rxjs/internal/symbol/observable';
import {Item } from "../../_modelo/Item";
import {HttpClient, HttpHeaders}  from "@angular/common/http";
import { JsonpClientBackend, JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Injectable({
  providedIn: 'root'
})
export class HttpsItemsService  extends AbstractitemsService {
  items: Item[];
  url: string
  constructor(private http:HttpClient) {

 super();
this.url = "http://localhost:3000/api/"
  }

  //addItem(item: Item): Observable<Item[]>{
    
//}
  getItems():Observable<Item[]>{
    return new Observable((observable) => {
     //this.http.post(this.url + "CustomUsers/login",null,{ params: {
      this.http.post(this.url + "CustomUsers/login",{
      "username":"eduardo",
      "password":"eduardo"
   // }}).subscribe(response => {
  }).subscribe(response => {

      console.log(response);
      var token = response["id"];

  

var headers = {headers: new HttpHeaders({
  "contentType: ": "application/json",
  "Autentication":token
})}
//this.http.get(this.url,headers).subscribe(resp => {
  //console.log();

//});
//console.log(  "http://localhost:3000/api/items?access_token="+token);
this.http.get<Item[]>("http://localhost:3000/api/items?access_token="+token,headers).subscribe(resp => {
this.items = resp;

});

observable.next(this.items);
observable.complete();

  })



})
  }
}
