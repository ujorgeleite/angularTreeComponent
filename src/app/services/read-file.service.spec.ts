import { TestBed } from '@angular/core/testing';

import { ReadFileService } from './read-file.service';
import { ApiRestService } from '../rest-services/api-rest.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ReadFileService', () => {
  let service: ReadFileService;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        ReadFileService,
        ApiRestService,
        ApiService
      ]
    });

    service = testBed.get(ReadFileService);

  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('Given that the metho get Persons is called', () => {
    let result;

    beforeAll(async () => {
      result = await service.getPersons().toPromise();
    });

    it('Then the method return a personViewModel list', () => {
      expect(result.length).toEqual(27);
    });
  });
});
