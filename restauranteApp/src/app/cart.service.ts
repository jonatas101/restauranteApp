import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Pratos',
      expanded: false,
      products: [
        {id: 0, name: 'Nhoque', price: '29', img: '/assets/imgs/pratos/nhoque.jpg'},
        {id: 1, name: 'Carbonara', price: '32', img: '/assets/imgs/pratos/carbonara.jpg'},
        {id: 2, name: 'Lasanha', price: '29', img: '/assets/imgs/pratos/lasanha.jpg'},
        {id: 3, name: 'Ravioli', price: '36', img: '/assets/imgs/pratos/ravioli.jpg'},
        {id: 4, name: 'Caneloni', price: '49', img: '/assets/imgs/pratos/caneloni.jpg'}
      ]
    },
    {
      category: 'Lanches',
      expanded: false,
      products: [
        {id: 0, name: 'chicken Parmesan', price: '17', img: '/assets/imgs/lanches/caprese.jpg'},
        {id: 1, name: 'Muffuletta', price: '31', img: '/assets/imgs/lanches/muffuletta.jpg'},
        {id: 2, name: 'Roasted Chicken Caprese', price: '29', img: '/assets/imgs/lanches/chicken_caprese.jpg'},
        {id: 3, name: 'Porchetta Sandwich', price: '27', img: '/assets/imgs/lanches/porchetta.jpg'},
        {id: 4, name: 'Ciabatta Sandwich', price: '49', img: '/assets/imgs/lanches/ciabatta.jpg'}
      ]
    },
    {
      category: 'Bebidas',
      expanded: false,
      products: [
        {id: 0, name: 'Refrigerante', price: '6', img: '/assets/imgs/bebidas/refrigerantes.jpg'},
        {id: 1, name: 'Cerveja', price: '10', img: '/assets/imgs/bebidas/cervejas.jpg'},
        {id: 2, name: 'Suco Natural', price: '6', img: '/assets/imgs/bebidas/sucos.jpg'},
        {id: 3, name: 'Vinho', price: '59', img: '/assets/imgs/bebidas/vinho.jpg'},
        {id: 4, name: 'Água', price: '3', img: '/assets/imgs/bebidas/agua.png'}
      ]
    },
    {
      category: 'Sobremesa',
      expanded: false,
      products: [
        {id: 0, name: 'Tiramisù', price: '29', img: '/assets/imgs/sobremesas/tiramisu.png'},
        {id: 1, name: 'Cassata Siciliana', price: '32', img: '/assets/imgs/sobremesas/cassata.jpg'},
        {id: 2, name: 'Panna Cotta', price: '29', img: '/assets/imgs/sobremesas/panna_cota.jpg'},
        {id: 3, name: 'Babà', price: '36', img: '/assets/imgs/sobremesas/baba.jpg'},
        {id: 4, name: 'Tartufo di Pizzo', price: '49', img: '/assets/imgs/sobremesas/tartufo.jpg'}
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
