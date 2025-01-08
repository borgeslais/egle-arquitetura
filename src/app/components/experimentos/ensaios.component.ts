import { Component } from '@angular/core';
import { SumoComponent } from "./sumo/sumo.component";
import { TsisComponent } from "./tsis/tsis.component";
import { NgFor } from '@angular/common';
import { CardExperimentoComponent } from './card-experimento/card-experimento.component';

@Component({
  selector: 'app-ensaios',
  standalone: true,
  imports: [CardExperimentoComponent],
  templateUrl: './ensaios.component.html',
  styleUrl: './ensaios.component.scss'
})
export class EnsaiosComponent {


}
