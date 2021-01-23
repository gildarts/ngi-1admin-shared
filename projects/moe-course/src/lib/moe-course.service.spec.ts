import { TestBed } from '@angular/core/testing';

import { MoeCourseService } from './moe-course.service';

describe('MoeCourseService', () => {
  let service: MoeCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoeCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
