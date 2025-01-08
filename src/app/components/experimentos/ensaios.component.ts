import { Component } from '@angular/core';
import { SumoComponent } from "./sumo/sumo.component";
import { TsisComponent } from "./tsis/tsis.component";

@Component({
  selector: 'app-ensaios',
  standalone: true,
  imports: [SumoComponent, TsisComponent],
  templateUrl: './ensaios.component.html',
  styleUrl: './ensaios.component.scss'
})
export class EnsaiosComponent {

}
