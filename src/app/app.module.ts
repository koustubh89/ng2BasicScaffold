import * as _ from 'lodash';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactsAppRoutes } from './routes/app.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListingComponent } from './listing/listing.component';
import { AppDetailComponent } from './detail/detail.component';
import { GridComponent } from './product-grid/grid.component';
import { FormsComponent } from './forms/forms.component';
import { WindowRef } from './shared/window-service';

import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListingComponent,
    AppDetailComponent,
    FormsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, BrowserAnimationsModule, GridModule, NgbModule.forRoot(),
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
