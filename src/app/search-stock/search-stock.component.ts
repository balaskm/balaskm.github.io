import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

import { StockDetails } from '../stock-details';
import { StockDetailsService } from '../stock-details.service';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent implements OnInit {

  stocks: StockDetails[]=[];
  stockFormControl = new FormControl();
  filteredStocks!: Observable<StockDetails[]>;
  


  constructor(private stockDetailsService: StockDetailsService, private router: Router ) { }

  ngOnInit(): void {
    this.stockDetailsService.getStockDetails().subscribe({next:stocks => this. stocks = stocks});
    this.filteredStocks=this.stockFormControl.valueChanges.pipe(startWith(''),
    map(value => this._filter(value || '')));
  }

  selectedStock(stock: StockDetails){
    return stock.Symbol;
  }

  getPosts(stock: StockDetails){
    this.stockDetailsService.selectedStock=stock;
    this.router.navigate(['/stock-details']);
  }

  showProfitability(){
    this.router.navigate(['/stock-list']);
  }

  private _filter(value: string): StockDetails[]{
    const filterValue = value.toUpperCase();
    if (filterValue==''){
      return this.stocks
    }
    else{
    return this.stocks.filter(stock =>
      stock.Name.includes(filterValue));
    }
    
  }

  

}
