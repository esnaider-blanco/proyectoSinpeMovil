import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinpeFormComponent } from './sinpe-form.component';

describe('SinpeFormComponent', () => {
  let component: SinpeFormComponent;
  let fixture: ComponentFixture<SinpeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinpeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinpeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
