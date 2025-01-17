import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css'
})
export class PorfolioComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Semir Asceric - Portfolio')
  }
}
