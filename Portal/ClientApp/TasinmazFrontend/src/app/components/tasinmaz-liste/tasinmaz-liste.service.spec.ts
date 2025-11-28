import { TestBed } from '@angular/core/testing';

import { TasinmazListeService } from './tasinmaz-liste.service';

describe('TasinmazListeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasinmazListeService = TestBed.get(TasinmazListeService);
    expect(service).toBeTruthy();
  });
});
