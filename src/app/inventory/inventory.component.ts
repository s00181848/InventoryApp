import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-inventory',
  template: 
  `
  <div class="app-inventory">
  (products will go here soon)
  </div>
  `,
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
product: Product;
  constructor() { 
    this.product = new Product('MYSHOES',
    'black running shoes', '/assets/images/products/black-shoes.jpg', 
    ['Mens', 'Running', 'Shoes'], 109.99 );

  }

  ngOnInit() {
  }

}
