import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { PersonViewModel } from '../models/person-view.model';
import { UpdatePersonAction } from 'src/reducer/actions/actions';
import { AppState } from 'src/app.state';

@Component({
  selector: 'app-person-root',
  templateUrl: './person-root.component.html',
  styleUrls: ['./person-root.component.sass']
})
export class PersonRootComponent implements OnInit {
  @Input() person: PersonViewModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  selectPersonTree($event) {
    const person: PersonViewModel = $event as PersonViewModel;
    person.selected = !person.selected;
    this.store.dispatch(new UpdatePersonAction(person));
  }

}
