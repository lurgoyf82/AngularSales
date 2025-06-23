import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartOutputComponent } from './cart-output/cart-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CartFormComponent,
    CartOutputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }