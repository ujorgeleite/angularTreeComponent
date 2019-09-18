import { Component, OnInit, Input } from '@angular/core';
import { PersonViewModel } from '../models/person-view.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  @Input() person: PersonViewModel;

  constructor() { }

  ngOnInit() {
  }

}


