import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { StateViewModel } from 'src/reducer/models/state-view.model';
import { UpdateListAction } from 'src/reducer/actions/actions';
import { ReadFileService } from '../services/read-file.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.sass']
})
export class PersonListComponent implements OnInit {
  stateView: Observable<StateViewModel>;

  constructor(private store: Store<AppState>,
              private readFileService: ReadFileService) {


  }

  ngOnInit() {
    this.readFileService.getPersons()
      .subscribe(response => {
        this.store.dispatch(new UpdateListAction(response));
      },
        error => console.log(error));

    this.stateView = this.store.select('persons');
  }
}
