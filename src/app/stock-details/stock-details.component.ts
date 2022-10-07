import { Component, OnInit } from '@angular/core';

import { StockDetails } from '../stock-details';
import { StockDetailsService } from '../stock-details.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  stock: StockDetails=new StockDetails;
  stocks: StockDetails[]=[];
  test: number=0;
  EPVAvgProfit: number=0;
  EPVTotalEPV: number=0;
  EPVIV1: number=0;
  EPVIV2: number=0;
  EPVProfitability1: number=0;
  EPVProfitability2: number=0;
  EPVEPV: number=0;

  buffettProfit: number=0;
  buffettProfitGrowth: number=0;
  buffettProfitFut1: number=0;
  buffettProfitFut2: number=0;
  buffettProfitFut3: number=0;
  buffettProfitFut4: number=0;
  buffettProfitFut5: number=0;
  buffettProfitAdj1: number=0;
  buffettProfitAdj2: number=0;
  buffettProfitAdj3: number=0;
  buffettProfitAdj4: number=0;
  buffettProfitAdj5: number=0;
  buffettTerminalAdj: number=0;
  buffettTerminalValue: number=0;
  buffettFinalTotal: number=0;
  buffettIV3: number=0;
  buffettProfitability3: number=0;
  


  constructor(private stockDetailsService: StockDetailsService) { }

  ngOnInit(): void {
    this.stock=this.stockDetailsService.selectedStock;
    this.stockDetailsService.getStockDetails().subscribe({next:stocks => this. stocks = stocks});
    this.setValues(this.stock);
    this.setEPVValues(this.stock);

  }
  setValues(stock: StockDetails) {
    this.buffettProfit=stock.ProfitCurr;
    if(stock.ProfitGrowth==0.30000000000000004){
    this.buffettProfit=stock.AvgProfit;
    }
    this.test=stock.ProfitGrowth;
    this.buffettProfitGrowth=this.stock.ProfitGrowth
    this.buffettProfitFut1=this.stock.ProfitFut1
    this.buffettProfitFut2=this.stock.ProfitFut2
    this.buffettProfitFut3=this.stock.ProfitFut3
    this.buffettProfitFut4=this.stock.ProfitFut4
    this.buffettProfitFut5=this.stock.ProfitFut5
    this.buffettProfitAdj1=this.stock.ProfitAdj1
    this.buffettProfitAdj2=this.stock.ProfitAdj2
    this.buffettProfitAdj3=this.stock.ProfitAdj3
    this.buffettProfitAdj4=this.stock.ProfitAdj4
    this.buffettProfitAdj5=this.stock.ProfitAdj5
    this.buffettTerminalAdj=this.stock.TerminalAdj
    this.buffettTerminalValue=this.stock.TerminalValue
    this.buffettFinalTotal=this.stock.FinalTotal
    this.buffettIV3=this.stock.IV3
    this.buffettProfitability3=this.stock.Profitability3

  }

  setEPVValues(stock: StockDetails) {
    
    this.EPVAvgProfit=this.stock.AvgProfit;
    this.EPVEPV=this.stock.EPV;
    this.EPVTotalEPV=this.stock.TotalEPV;
    this.EPVIV1=this.stock.IV1;
    this.EPVIV2=this.stock.IV2;
    this.EPVProfitability1=this.stock.Profitability1;
    this.EPVProfitability2=this.stock.Profitability2;    

  }

  setProfit(value: number){
    this.buffettProfit=value;
    this.calculateIV3();
  }
  setEPVProfit(value: number){
    this.EPVAvgProfit=value;
    this.calculateIV12();
  }

  setCAGR(value: number){
    this.buffettProfitGrowth=value;
    this.calculateIV3();
  }
  calculateIV12(){
    this.EPVEPV=this.EPVAvgProfit*14;
    this.EPVTotalEPV=this.EPVEPV+this.stock.Investments+this.stock.CashEq;
    this.EPVIV1=(this.EPVTotalEPV-this.stock.Debt-this.stock.Liabilities)/this.stock.NumberOfShares;
    this.EPVIV2=(this.EPVTotalEPV-this.stock.Debt)/this.stock.NumberOfShares;
    this.EPVProfitability1=(this.EPVIV1-this.stock.CMP)/this.stock.CMP;
    this.EPVProfitability2=(this.EPVIV2-this.stock.CMP)/this.stock.CMP;


  }
  calculateIV3(){
    this.buffettProfitFut1=this.buffettProfit*(1+this.buffettProfitGrowth);
    this.buffettProfitFut2=this.buffettProfitFut1*(1+this.buffettProfitGrowth);
    this.buffettProfitFut3=this.buffettProfitFut2*(1+this.buffettProfitGrowth);
    this.buffettProfitFut4=this.buffettProfitFut3*(1+this.buffettProfitGrowth);
    this.buffettProfitFut5=this.buffettProfitFut4*(1+this.buffettProfitGrowth);
    this.buffettProfitAdj1=(this.buffettProfitFut1+this.stock.AvgCapex+this.stock.AvgDep
      -(this.stock.Debt/5))*(0.93);
    this.buffettProfitAdj2=(this.buffettProfitFut2+this.stock.AvgCapex+this.stock.AvgDep
     -(this.stock.Debt/5))*Math.pow(0.93,2);
    this.buffettProfitAdj3=(this.buffettProfitFut3+this.stock.AvgCapex+this.stock.AvgDep
          -(this.stock.Debt/5))*Math.pow(0.93,3);
    this.buffettProfitAdj4=(this.buffettProfitFut4+this.stock.AvgCapex+this.stock.AvgDep
            -(this.stock.Debt/5))*Math.pow(0.93,4);
    this.buffettProfitAdj5=(this.buffettProfitFut5+this.stock.AvgCapex+this.stock.AvgDep
              -(this.stock.Debt/5))*Math.pow(0.93,5);

      this.buffettTerminalValue=this.buffettProfitFut5*14;
      this.buffettTerminalAdj=this.buffettTerminalValue*Math.pow(0.93,5);
      this.buffettFinalTotal=this.buffettProfitAdj1+this.buffettProfitAdj2+
      this.buffettProfitAdj3+this.buffettProfitAdj4+this.buffettProfitAdj5+this.buffettTerminalAdj;
      this.buffettIV3=this.buffettFinalTotal/this.stock.NumberOfShares;
      this.buffettProfitability3=(this.buffettIV3-this.stock.CMP)/Math.abs(this.stock.CMP);

  }
  

}
