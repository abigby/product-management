import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsManagementServiceService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAllProducts() {
    
    return this.httpClient.get('http://localhost:3000/products').subscribe(
      (response) => {
        console.log(response);
        return response;
      }
    );
  }

}
