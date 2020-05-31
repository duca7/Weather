import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UVComponent } from './uv.component';

describe('UVComponent', () => {
  let component: UVComponent;
  let fixture: ComponentFixture<UVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
