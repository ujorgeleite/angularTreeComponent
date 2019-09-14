import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { PersonResponseModel } from '../models/person-response.model';

@Injectable()
export class ApiService {
  baseUrl;

  constructor(public httpClient: HttpClient) {
    this.baseUrl = 'assets/';
  }

  get(paramUrl: string): Observable<PersonResponseModel[]> {
    return this.httpClient.get<PersonResponseModel[]>(`${this.baseUrl}${paramUrl}`);
  }
}
