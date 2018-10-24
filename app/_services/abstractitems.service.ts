import { Injectable } from '@angular/core';
import {Item } from "../../_modelo/Item"
import {Observable } from "rxjs/internal/Observable"
@Injectable({
  providedIn: 'root'
})
export abstract class AbstractitemsService {

  constructor() { }

 abstract getItems():Observable<Item[]>;
}
