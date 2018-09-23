import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformtwoComponent } from './dynamicformtwo.component';

describe('DynamicformtwoComponent', () => {
  let component: DynamicformtwoComponent;
  let fixture: ComponentFixture<DynamicformtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicformtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
