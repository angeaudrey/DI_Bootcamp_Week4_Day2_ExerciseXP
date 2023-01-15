import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { HighlightDirective } from './highlight.directive';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
     HighlightDirective,
     BoldDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
