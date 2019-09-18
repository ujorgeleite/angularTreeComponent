import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { map as mapJsonToArray } from '../mappers/map-json-to-array.mapper';
import { PersonViewModel } from '../models/person-view.model';

@Injectable()
export class ApiRestService {

    constructor(private apiService: ApiService) { }

    getPersons(): Observable<PersonViewModel[]> {
        return this.apiService.get('data.json')
            .pipe(switchMap(result => of(mapJsonToArray(result)))) as Observable<PersonViewModel[]>;
    }
}
