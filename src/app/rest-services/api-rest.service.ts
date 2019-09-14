import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { PersonResponseModel } from '../models/person-response.model';
import { map as mapJsonToArray } from '../mappers/map-json-to-array.mapper';

@Injectable()
export class ApiRestService {

    constructor(private apiService: ApiService) { }

    getPersons(): Observable<PersonResponseModel[]> {
        return this.apiService.get('data.json')
            .pipe(switchMap(result => mapJsonToArray(result))) as Observable<PersonResponseModel[]>;
    }
}
