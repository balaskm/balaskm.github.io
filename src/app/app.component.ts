import { Component,Renderer2 } from '@angular/core';
import{StockDetailsService} from './stock-details.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntrinsicValue';
  constructor(private stockDetailsService: StockDetailsService,private router: Router, 
    private renderer:Renderer2){

  }
}
