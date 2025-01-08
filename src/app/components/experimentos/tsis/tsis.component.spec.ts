import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsisComponent } from './tsis.component';

describe('TsisComponent', () => {
  let component: TsisComponent;
  let fixture: ComponentFixture<TsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
