import { IProduct } from './models/product';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IPagination } from './models/pagination';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Skinet';
  products: IProduct[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe(
      (response: any) => {
        this.products = response.data;
      }, error => {
        console.log(error);
      });
  }
}
