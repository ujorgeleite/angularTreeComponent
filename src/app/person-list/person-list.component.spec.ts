import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonComponent } from '../person/person.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';


import { getEntitiePersons, getInitialStateView } from './person-list.mock';
import { ReadFileService } from '../services/read-file.service';
import { PersonListComponent } from './person-list.component';
import { PersonListStub as stub } from './person-list.stub';
import { ErrorHandlerAction } from 'src/reducer/actions/actions';
import { PersonRootComponent } from '../person-root/person-root.component';
import { PersonChildComponent } from '../person-child/person-child.component';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;
  let readFileService: ReadFileService;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        PersonListComponent,
        PersonRootComponent,
        PersonChildComponent,
        PersonComponent]
    });

    readFileService = TestBed.get(ReadFileService);
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.debugElement.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the method NgOnInit is called with success', () => {
    let result;

    beforeEach(() => {
      spyOn(store, 'dispatch');
      spyOn(store, 'select').and.callFake(() => of(getInitialStateView()));
      spyOn(readFileService, 'getPersons').and.callFake(() => of(getEntitiePersons()));
      component.ngOnInit();
      fixture.detectChanges();
    });


    it('The entities of STATEVIEW should be populated', async () => {
      result = await component.stateView.toPromise();
      expect(result.entities.length).toBeGreaterThan(0);
      expect(result.entities.length).toEqual(1);
    });

    it('The STATEVIEW shouldn\'t have errors  ', async () => {
      result = await component.stateView.toPromise();
      expect(result.isError).toBeFalsy();
    });

    it('The STATEVIEW shouldn\'t have to be loading', async () => {
      result = await component.stateView.toPromise();
      expect(result.isError).toBeFalsy();
    });

  });

  describe('When the method NgOnInit is called with error', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch').and.callFake(() => { });
      spyOn(readFileService, 'getPersons').and.callFake(() => {
        return throwError(new Error('Fake error'));
      });

      component.ngOnInit();
      fixture.detectChanges();
    });

    it('The entities of STATEVIEW shouldn\'t populated', () => {
      expect(component.stateView).toBeUndefined();
    });

    it('The store should be called with params', () => {
      const params = { title: 'Error', message: 'Fake error' };
      expect(store.dispatch).toHaveBeenCalledWith(new ErrorHandlerAction(params));
    });

  });

});
