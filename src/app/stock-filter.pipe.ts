import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter',
  pure: false
})
export class StockFilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    return items.filter(item => (item.Profitability1>filter.Profitability1
      && item.Profitability2>filter.Profitability2
      && item.Profitability3>filter.Profitability3
      && item.CAGR5>filter.CAGR5
      && item.CAGR3>filter.CAGR3
      && item.CAGR1>filter.CAGR1)
      );
}
  }


