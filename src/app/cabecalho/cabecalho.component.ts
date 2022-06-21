import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CARRO } from '../mock-carros';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  carros = CARRO;
  selectedCarro?: Carro;

  carro: Carro[] = [];

  ngOnInit(): void {
    this.getCarro();
  }

  onSelect(carro: Carro): void {
    this.selectedCarro = carro;
  }

  getCarro(): void {
    this.carro.service.getCarros()
        .subscribe(carro => this.carro = carro);
  }
}