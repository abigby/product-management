import { ProductsManagementServiceService } from './services/productsManagement/products-management-service.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsInventoryComponent } from './products/products-inventory/products-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [ProductsManagementServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
