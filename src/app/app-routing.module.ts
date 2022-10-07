import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  {path: 'stock-details', component: StockDetailsComponent},
  {path: 'stock-list', component: StockListComponent},
  {path: 'search-stock', component: SearchStockComponent},
  { path: '',   redirectTo: '/search-stock', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
