import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from 'src/reducer/reducer';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';



import { AppComponent } from './app.component';
import { ReadFileService } from './services/read-file.service';
import { ApiService } from './services/api.service';
import { ApiRestService } from './rest-services/api-rest.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      personState: reducer
    })
  ],
  providers: [
    ReadFileService,
    ApiService,
    ApiRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
