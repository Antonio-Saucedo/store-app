import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list.component.ts',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = [...products];
  show = [''];

  share() {
    window.alert('The product has been shared!');
  }

  showDetails(product: string) {
    this.show.includes(product)
      ? this.show.splice(this.show.indexOf(product), 1)
      : this.show.push(product);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale.');
  }
}
