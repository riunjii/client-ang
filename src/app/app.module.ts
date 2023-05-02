import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    NgModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
