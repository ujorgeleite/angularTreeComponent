import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from 'src/reducer/reducer';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { ReadFileService } from './services/read-file.service';
import { ApiService } from './services/api.service';
import { ApiRestService } from './rest-services/api-rest.service';
import { PersonListComponent } from './person-list/person-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatTreeModule,
    MatCheckboxModule,
    StoreModule.forRoot({
      persons: reducer
    }),
    BrowserAnimationsModule
  ],
  providers: [
    ReadFileService,
    ApiService,
    ApiRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
