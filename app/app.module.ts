import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { AppRoutingComponent } from './/app-routing.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from "@angular/forms";

//import { MockItemsService} from "./_services/mock-items.service";
import {HttpsItemsService} from "./_services/https-items.service"
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewItemComponent,
    AppRoutingComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule 
  ],
  //providers: [MockItemsService,HttpsItemsService],
  providers: [HttpsItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
