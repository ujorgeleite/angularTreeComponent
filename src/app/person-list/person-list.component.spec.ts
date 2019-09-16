import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { PersonListComponent } from './person-list.component';
import { ReadFileService } from '../services/read-file.service';
import { PersonListStub as stub } from './person-list.stub';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;
  let readFileService: ReadFileService;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatExpansionModule,
        MatListModule,
        MatTreeModule,
        MatCheckboxModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: Store, useClass: stub },
        { provide: ReadFileService, useClass: stub },
      ],
      declarations: [PersonListComponent]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    readFileService = TestBed.get(ReadFileService);
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
