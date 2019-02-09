import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  ProductCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
     this.ProductCollection = afs.collection('products')
   }

   getProducts() {
    return this.ProductCollection.valueChanges();
   }

   saveProduct(product) {
    return this.ProductCollection.add(product);
   }

}
