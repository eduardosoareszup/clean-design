import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanDesignComponent } from './clean-design.component';

describe('CleanDesignComponent', () => {
  let component: CleanDesignComponent;
  let fixture: ComponentFixture<CleanDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
