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

  produto: Produto = {
    id: 1,
    name: 'Caixa de bombom Nestlé',
    preco: 25,
    qtdEstoque: 100,
    categoria: 'Alimentação'
  }

  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: Produto;
  onSelect(produto: Produto): void {
  this.selectedHero = produto;
}

}
