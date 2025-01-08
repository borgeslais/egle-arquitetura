import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExperimentoComponent } from './card-experimento.component';

describe('CardExperimentoComponent', () => {
  let component: CardExperimentoComponent;
  let fixture: ComponentFixture<CardExperimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExperimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExperimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
