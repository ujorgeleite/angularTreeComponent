import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app.state';
import { Store } from '@ngrx/store';


import { UpdateListAction, ErrorHandlerAction } from 'src/reducer/actions/actions';
import { StateViewModel } from 'src/reducer/models/state-view.model';
import { ReadFileService } from '../services/read-file.service';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.sass']
})
export class PersonListComponent implements OnInit {
  stateView: Observable<StateViewModel>;


  constructor(private store: Store<AppState>,
              private readFileService: ReadFileService) { }

  ngOnInit() {
    this.readFileService.getPersons()
      .subscribe(response => {
        this.store.dispatch(new UpdateListAction(response));
        this.stateView = this.store.select('persons');

      },
        error => {
          const errorViewModel = { title: 'Error', message: error.message };
          this.store.dispatch(new ErrorHandlerAction(errorViewModel));
        });
  }
}
