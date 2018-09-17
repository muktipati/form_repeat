import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeplateFormComponent } from './teplate-form.component';

describe('TeplateFormComponent', () => {
  let component: TeplateFormComponent;
  let fixture: ComponentFixture<TeplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
