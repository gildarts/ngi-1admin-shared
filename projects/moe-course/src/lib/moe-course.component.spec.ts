import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoeCourseComponent } from './moe-course.component';

describe('MoeCourseComponent', () => {
  let component: MoeCourseComponent;
  let fixture: ComponentFixture<MoeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
