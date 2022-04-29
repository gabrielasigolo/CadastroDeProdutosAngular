import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { PRODUTOS } from '../mock-produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = PRODUTOS;

  produto1: Produto = {
    id: 1,
    name: 'Caixa de bombom Nestlé'
  }

  produto2: Produto = {
    id: 2,
    name: 'Sorvete Kibon'
  }

  produto3: Produto = {
    id: 3,
    name: 'Chocolate Nestlé'
  }

  produto4: Produto = {
    id: 4,
    name: 'Gilette'
  }

  produto5: Produto = {
    id: 5,
    name: 'Pizza Sadia'
  }

  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: Produto;
  onSelect(produto: Produto): void {
  this.selectedHero = produto;
}

}
