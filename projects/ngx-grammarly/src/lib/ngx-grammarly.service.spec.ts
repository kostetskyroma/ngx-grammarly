import { TestBed } from '@angular/core/testing';

import { NgxGrammarlyService } from './ngx-grammarly.service';

describe('NgxGrammarlyService', () => {
  let service: NgxGrammarlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGrammarlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
