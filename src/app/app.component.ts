import { Component, EventEmitter } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() { 
    this.products = [new Product('MYSHOES',
    'black running shoes', 
    '/assets/images/products/black-shoes.jpg', 
    ['Mens', 'Running', 'Shoes'],
     109.99 ),
    new Product ('NEATOJACKET', 
    'Blue Jacket', 
    '/assets/images/products/blue-jacket.jpg', 
    ['Women', 'Apparel', 'Jackets and Vests'],
    238.99),
    new Product('NICEHAT', 'A Nice Black Hat',
    '/assets/images/products/black-hat.jpg',
    ['Men', 'Accessories', 'Hats'], 29.99)
  ];
  }
  productWasSelected(product:Product): void {
    console.log('Product clicked: ', product)
  }

}
