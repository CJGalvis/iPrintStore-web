import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public productList: Array<any> = [
    {
      img: 'https://images.printify.com/5d5e6e5f4b5ca808dc607832.jpg?s=504',
      name: 'producto',
      price: 35000,
      description: 'descripcion del producto',
    },
    {
      img: 'https://images.printify.com/5d5f9aff17a031002d164c73.jpg?s=504',
      name: 'producto',
      price: 50000,
      description: 'descripcion del producto',
    },
    {
      img: 'https://images.printify.com/5d5e6e5f4b5ca808dc607832.jpg?s=504',
      name: 'producto',
      price: 35000,
      description: 'descripcion del producto',
    },
    {
      img: 'https://images.printify.com/5d5f9aff17a031002d164c73.jpg?s=504',
      name: 'producto',
      price: 50000,
      description: 'descripcion del producto',
    },
    {
      img: 'https://images.printify.com/5d5e6e5f4b5ca808dc607832.jpg?s=504',
      name: 'producto',
      price: 35000,
      description: 'descripcion del producto',
    },
    {
      img: 'https://images.printify.com/5d5f9aff17a031002d164c73.jpg?s=504',
      name: 'producto',
      price: 50000,
      description: 'descripcion del producto',
    },
    {
      img: 'https://images.printify.com/5d5e6e5f4b5ca808dc607832.jpg?s=504',
      name: 'producto',
      price: 35000,
      description: 'descripcion del producto',
    },
    {
      img: 'https://images.printify.com/5d5f9aff17a031002d164c73.jpg?s=504',
      name: 'producto',
      price: 50000,
      description: 'descripcion del producto',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
