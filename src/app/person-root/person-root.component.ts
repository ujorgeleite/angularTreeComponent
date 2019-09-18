import { Component, OnInit, Input } from '@angular/core';
import { PersonViewModel } from '../models/person-view.model';

@Component({
  selector: 'app-person-root',
  templateUrl: './person-root.component.html',
  styleUrls: ['./person-root.component.sass']
})
export class PersonRootComponent implements OnInit {
  @Input() person: PersonViewModel;

  constructor() { }

  ngOnInit() {
  }

}
