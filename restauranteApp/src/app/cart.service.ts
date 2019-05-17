import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Pratos',
      expanded: true,
      products: [
        {id: 0, name: 'nhoque', price: '29'},
        {id: 1, name: 'spaghetti alla carbonara', price: '32'},
        {id: 2, name: 'lasanha', price: '29'},
        {id: 3, name: 'ravioli', price: '36'},
        {id: 4, name: 'caneloni', price: '49'}
      ]
    },
    {
      category: 'Lanches',
      expanded: true,
      products: [
        {id: 0, name: 'chicken Parmesan', price: '17'},
        {id: 1, name: 'Muffuletta', price: '31'},
        {id: 2, name: 'Roasted Chicken Caprese', price: '29'},
        {id: 3, name: 'Porchetta Sandwich', price: '27'},
        {id: 4, name: 'Ciabatta Sandwich', price: '49'}
      ]
    },
    {
      category: 'Bebidas',
      expanded: true,
      products: [
        {id: 0, name: 'Refrigerante', price: '6'},
        {id: 1, name: 'Cerveja', price: '10'},
        {id: 2, name: 'Suco Natural', price: '6'},
        {id: 3, name: 'Vinho', price: '59'},
        {id: 4, name: 'Água', price: '3'}
      ]
    },
    {
      category: 'Sobremesa',
      expanded: true,
      products: [
        {id: 0, name: 'Tiramisù', price: '29'},
        {id: 1, name: 'Cassata Siciliana', price: '32'},
        {id: 2, name: 'Panna Cotta', price: '29'},
        {id: 3, name: 'Babà', price: '36'},
        {id: 4, name: 'Tartufo di Pizzo', price: '49'}
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
