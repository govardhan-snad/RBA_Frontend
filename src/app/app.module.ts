import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApproachOneComponent } from './approach-one/approach-one.component';
import { ApproachTwoComponent } from './approach-two/approach-two.component';

@NgModule({
  declarations: [AppComponent, ApproachOneComponent, ApproachTwoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
