import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bestList: any = [
    { "name": "Danone", "sold": 5, "price":'20000',"image":"product.png","date":"2021-06-21"},
    { "name": "Aqua", "sold": 10, "price":'10300',"image":"kemasan.jpg","date":"2021-06-23"},
    { "name": "Fit", "sold": 20, "price":'3000',"image":"kemasan3.jpg" ,"date":"2021-06-23"},
    { "name": "Sari Roti", "sold": 30, "price":'29000',"image":"kemasan2.jpg","date":"2021-06-19"},
    { "name": "Ultramilk", "sold": 40, "price":'42000' ,"image":"product.png","date":"2021-06-18"},
    { "name": "Nestle", "sold": 50, "price":'21000' ,"image":"kemasan2.jpg","date":"2021-06-20"},
    { "name": "Silverqueen", "sold": 60, "price":'60000' ,"image":"kemasan3.jpg","date":"2021-06-19"},
    { "name": "Morinaga", "sold": 70, "price":'50000' ,"image":"product.png","date":"2021-06-20"},
    { "name": "Sweety", "sold": 80, "price":'28000' ,"image":"kemasan.jpg","date":"2021-06-21"},
    { "name": "Kenzler", "sold": 90 , "price":'32000',"image":"product.png","date":"2021-06-21"}
  ]

  topList: any = [
    { "name": "Biore", "sold": 5, "price":'390000',"image":"kemasan3.jpg","date":"2021-06-21"},
    { "name": "S-tee", "sold": 10, "price":'80300',"image":"kemasan2.jpg","date":"2021-06-22"},
    { "name": "Panasonic", "sold": 20, "price":'300990' ,"image":"kemasan.jpg","date":"2021-06-20"},
    { "name": "Toshiba", "sold": 30, "price":'2900000',"image":"kemasan3.jpg","date":"2021-06-19"},
    { "name": "Sony", "sold": 40, "price":'4200000' ,"image":"product.png","date":"2021-06-18"},
    { "name": "Cannon", "sold": 50, "price":'2100000' ,"image":"kemasan.jpg","date":"2021-06-17"},
    { "name": "ABC", "sold": 60, "price":'60000' ,"image":"kemasan2.jpg","date":"2021-06-10"},
    { "name": "Polytron", "sold": 70, "price":'5000000' ,"image":"product.png","date":"2021-06-10"},
    { "name": "Samsung", "sold": 80, "price":'280100' ,"image":"kemasan3.jpg","date":"2021-06-23"},
    { "name": "Sanyo", "sold": 90 , "price":'3200000',"image":"product.png","date":"2021-06-22"}
  ]

  constructor() {
     localStorage.setItem('bestSell', JSON.stringify(this.bestList));
     localStorage.setItem('topSell', JSON.stringify(this.topList));
  }

}
