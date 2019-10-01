import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
//implements OnInit
export class ProductListComponent {

  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  /*
  constructor() { }

  ngOnInit() {
  }
  */

}
