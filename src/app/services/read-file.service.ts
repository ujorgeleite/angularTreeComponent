import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ApiRestService } from '../rest-services/api-rest.service';
import { PersonViewModel } from 'src/app/models/person-view.model';

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {

  constructor(public apiRestService: ApiRestService) { }

  getPersons(): Observable<PersonViewModel[]> {
    return this.apiRestService.getPersons();

  }
}
