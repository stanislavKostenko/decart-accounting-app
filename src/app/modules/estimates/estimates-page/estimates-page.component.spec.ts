import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatesPageComponent } from './estimates-page.component';

describe('EstimatesPageComponent', () => {
  let component: EstimatesPageComponent;
  let fixture: ComponentFixture<EstimatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
