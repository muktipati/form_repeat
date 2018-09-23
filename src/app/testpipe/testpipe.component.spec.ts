import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpipeComponent } from './testpipe.component';

describe('TestpipeComponent', () => {
  let component: TestpipeComponent;
  let fixture: ComponentFixture<TestpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
