import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { title } from 'process';

@Component({
  selector: 'card-experimento',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-experimento.component.html',
  styleUrl: './card-experimento.component.scss'
})
export class CardExperimentoComponent {

  projects = [
    {
      src: './assets/images/TSIS.png',
      alt: 'TSIS',
      rowSpan: 1,
      colSpan: 2,
      title: 'TSIS',
      description: 'Os projetos TSIS combinam estrutura, função e estética de forma integrada. Essa abordagem promove eficiência, sustentabilidade e harmonia visual, unindo arquitetura e engenharia em soluções completas.',
      link: 'www.google.com.br'
    },
    { src: './assets/images/qgis-photos/1.jpeg', alt: 'Image 2', rowSpan: 1, colSpan: 2, title: 'QGIS',
      description: 'Os projetos desenvolvidos com QGIS utilizam uma plataforma de código aberto para análise e gestão de dados geoespaciais. Essa ferramenta permite criar mapas, realizar análises avançadas e integrar diferentes tipos de informações geográficas, oferecendo soluções precisas e versáteis.',
      link: 'www.google.com.br' }
  ];

}
