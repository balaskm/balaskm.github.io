import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import { StockDetails } from './stock-details';

@Injectable({
  providedIn: 'root'
})
export class StockDetailsService {

  constructor(private http:HttpClient) { }

  selectedStock!: StockDetails;

  getStockDetails(): Observable<StockDetails[]>{
    return this.http.get<StockDetails[]>('./assets/IntrinsicValue.json').pipe(
      catchError(this.handleError))

  }

  private handleError(err: HttpErrorResponse){
    console.error(err)
    return throwError(()=>err.error()||'Server error')
  }
}
