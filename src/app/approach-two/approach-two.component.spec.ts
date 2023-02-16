import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachTwoComponent } from './approach-two.component';

describe('ApproachTwoComponent', () => {
  let component: ApproachTwoComponent;
  let fixture: ComponentFixture<ApproachTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
