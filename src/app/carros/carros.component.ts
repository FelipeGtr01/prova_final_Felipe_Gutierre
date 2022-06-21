import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CARRO } from '../mock-carros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros = CARRO;
  selectedCarro?: Carro;

  carro: Carro[] = [];

  ngOnInit(): void {
    
  }

  onSelect(carro: Carro): void {
    this.selectedCarro = carro;
  }

  
}