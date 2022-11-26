import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public itemInformationList: Array<string> = [
    'Envios nacionales',
    'Producto 100% garantizado',
    'La mejor calidad del mercado',
  ];

  constructor() {}

  ngOnInit(): void {}
}
