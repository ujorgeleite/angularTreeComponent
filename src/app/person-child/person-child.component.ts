import { Component, OnInit, Input } from '@angular/core';

import { PersonViewModel } from '../models/person-view.model';

@Component({
  selector: 'app-person-child',
  templateUrl: './person-child.component.html',
  styleUrls: ['./person-child.component.sass']
})
export class PersonChildComponent implements OnInit {
  @Input() person: PersonViewModel;
  constructor() { }

  ngOnInit() {
  }

}
