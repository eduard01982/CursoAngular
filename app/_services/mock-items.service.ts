import { Injectable } from '@angular/core';
import { AbstractitemsService } from 'src/app/_services/abstractitems.service';
import { Observable } from 'rxjs/internal/Observable';
import { observable } from 'rxjs/internal/symbol/observable';
import {Item } from "../../_modelo/Item"

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractitemsService {
  items: Item[];
  
  constructor() {

 super();
    this.items = [
      new Item("comprar carne"),
      new Item("compar verdura"),
      new Item("comprar carbon")
    ];
  }

  addItem(item: Item): Observable<Item[]>{

    return new Observable((observable) => {
    this.items.push(item);
    observable.next(this.items);
    observable.complete();

  })
}
  getItems():Observable<Item[]>{
    return new Observable((observable) => {
      observable.next(this.items);
      observable.complete();
    })
  }

  Remove(item: Item):Observable<Item[]>{

    return new Observable((observable) => {
    this.items = this.items.filter(it => it !== item);
    observable.next(this.items);
   observable.complete();
  })
}
}
