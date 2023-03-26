import { Component, OnInit } from '@angular/core';
import { ProductsManagementServiceService } from '../../services/productsManagement/products-management-service.service';

@Component({
  selector: 'app-products-inventory',
  templateUrl: './products-inventory.component.html',
  styleUrls: ['./products-inventory.component.scss']
})
export class ProductsInventoryComponent implements OnInit {
  public columnDefs: Array<Object> = [
    { headerName: 'Title', field: 'title', sortable: true, filter: true},
    { headerName: 'Description', field: 'description', sortable: true, filter: true},
    { headerName: 'Price', field: 'price', sortable: true, filter: true},
  ];

  public productsData;

  constructor(private readonly productsService: ProductsManagementServiceService) {
    
   }

  public ngOnInit(): void {
    this.productsData = this.productsService.getAllProducts();
  }
  
}
