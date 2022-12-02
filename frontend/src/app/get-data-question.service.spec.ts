import { TestBed } from '@angular/core/testing';

import { GetDataQuestionService } from './get-data-question.service';

describe('GetDataQuestionService', () => {
  let service: GetDataQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
