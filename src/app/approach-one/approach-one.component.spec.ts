import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachOneComponent } from './approach-one.component';

describe('ApproachOneComponent', () => {
  let component: ApproachOneComponent;
  let fixture: ComponentFixture<ApproachOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
