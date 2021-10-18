import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { userReducer } from './user-ngrx';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, UserComponent],
  imports: [BrowserModule, CommonModule, StoreModule.forRoot({ count: counterReducer, user: userReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
