import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseloginComponent } from './pleaselogin.component';

describe('PleaseloginComponent', () => {
  let component: PleaseloginComponent;
  let fixture: ComponentFixture<PleaseloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PleaseloginComponent]
    });
    fixture = TestBed.createComponent(PleaseloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
