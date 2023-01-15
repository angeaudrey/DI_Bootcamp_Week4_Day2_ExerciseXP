import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
// exercise1
    produits = [
    {
      nom: "huile",
      prix: 340.0
    },
    {
      nom: "ketchup",
      prix: 100.0
    },
    {
      nom: "mayonnaise",
      prix: 500.0
    },
  ];
}
