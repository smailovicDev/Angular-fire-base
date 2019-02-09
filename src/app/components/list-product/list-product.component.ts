import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  products: any[] = [];

  ngOnInit() {
    this.listProduct();
  }

  listProduct() {
    this.productService.getProducts()
        .subscribe(res => {
          this.products = res;
        })
  }

}
