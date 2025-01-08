import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumionComponent } from './lumion.component';

describe('LumionComponent', () => {
  let component: LumionComponent;
  let fixture: ComponentFixture<LumionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LumionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LumionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
