import { TestBed } from '@angular/core/testing';

import { ArquivoXmlService } from './arquivo-xml.service';

describe('ArquivoXmlServiceService', () => {
  let service: ArquivoXmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquivoXmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
