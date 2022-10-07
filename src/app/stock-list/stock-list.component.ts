import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StockDetails } from '../stock-details';
import { StockDetailsService } from '../stock-details.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: StockDetails[]=[];
  test: string='';
  filterStocks = {Profitability1: -1000
  ,Profitability2: -1000
  ,Profitability3: -1000
  ,CAGR5: -1000
  ,CAGR3: -1000
  ,CAGR1: -1000
};

  constructor(private stockDetailsService: StockDetailsService, private router: Router ) { }

  ngOnInit(): void {
    this.stockDetailsService.getStockDetails().subscribe({next:stocks => this. stocks = stocks})
  }

  getPosts(stock: StockDetails){
    this.stockDetailsService.selectedStock=stock;
    this.router.navigate(['/stock-details']);
  }

change(event: any){
  this.test=event.source.value;
  if(event.source.value == "p1gt25"){
  this.filterStocks.Profitability1=.25;  
  }
  if(event.source.value == "p1gt50"){
    this.filterStocks.Profitability1=.5;  
  }
  if(event.source.value == "p1gt100"){
      this.filterStocks.Profitability1=1;  
  }

  if(event.source.value == "p2gt25"){
    this.filterStocks.Profitability2=.25;  
    }
    if(event.source.value == "p2gt50"){
      this.filterStocks.Profitability2=.5;  
    }
    if(event.source.value == "p2gt100"){
        this.filterStocks.Profitability2=1;  
    }

    if(event.source.value == "p3gt25"){
      this.filterStocks.Profitability3=.25;  
      }
      if(event.source.value == "p3gt50"){
        this.filterStocks.Profitability3=.5;  
      }
      if(event.source.value == "p3gt100"){
          this.filterStocks.Profitability3=1;  
      }

      if(event.source.value == "c5gt10"){
        this.filterStocks.CAGR5=.1;  
        }
        if(event.source.value == "c5gt20"){
          this.filterStocks.CAGR5=.2;  
          }
          if(event.source.value == "c5gt30"){
            this.filterStocks.CAGR5=.3;  
            }
            
      if(event.source.value == "c3gt10"){
        this.filterStocks.CAGR3=.1;  
        }
        if(event.source.value == "c3gt20"){
          this.filterStocks.CAGR3=.2;  
          }
          if(event.source.value == "c3gt30"){
            this.filterStocks.CAGR3=.3;  
            }

            
      if(event.source.value == "c1gt10"){
        this.filterStocks.CAGR1=.1;  
        }
        if(event.source.value == "c1gt20"){
          this.filterStocks.CAGR1=.2;  
          }
          if(event.source.value == "c1gt30"){
            this.filterStocks.CAGR1=.3;  
            }
}

}
