import { TestBed, inject } from '@angular/core/testing';

import { ZorroService } from './zorro.service';

describe('ZorroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZorroService]
    });
  });

  it('should be created', inject([ZorroService], (service: ZorroService) => {
    expect(service).toBeTruthy();
  }));
});
