import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { PersonRootComponent } from './person-root.component';
import { PersonComponent } from '../person/person.component';
import { PersonChildComponent } from '../person-child/person-child.component';
import { PersonListComponent } from '../person-list/person-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('PersonRootComponent', () => {
  let component: PersonRootComponent;
  let fixture: ComponentFixture<PersonRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        MatExpansionModule,
        MatListModule,
        MatCheckboxModule,
        BrowserAnimationsModule
      ],
      declarations: [
        PersonRootComponent,
        PersonComponent,
        PersonChildComponent,
        PersonListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
