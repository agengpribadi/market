import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  month = [
    {value: 1, label:'6 Month'},
    {value: 2, label:'3 Month'},
    {value: 3, label:'1 Month'}
  ]
  bestSell : any;
  topSell : any;
  dataBest : any;
  dataTop : any;
  data : any;
  startDate: Date;
  endDate: Date;
  active = 'dashboard';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
          {
              label: 'Nett',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#37B04C'
          },
          {
              label: 'Gross',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#289E45'
          },
          {
            label: 'Average Purchase Value',
            data: [63, 58, 79, 80, 55, 54, 29],
            fill: false,
            borderColor: '#7AE28C'
          },
          {
            label: 'Unit per Transaction',
            data: [60, 40, 30, 61, 66, 90, 10],
            fill: false,
            borderColor: '#707070'
          }
      ]
  }; 
  this.bestSell = JSON.parse(localStorage.getItem('bestSell'));
  this.topSell = JSON.parse(localStorage.getItem('topSell'));
  if(this.dataBest === undefined) {
    this.dataBest = this.bestSell;
    this.dataTop = this.topSell;
  }
 }
 
  filter(start,end){
    var top = formatDate(start,'yyyy-MM-dd','en-US');
    var down = formatDate(end,'yyyy-MM-dd','en-US');
    var resultBest = [];
    var resultTop = [];
    for (let index = 0; index < this.bestSell.length; index++) {
      const element = this.bestSell[index].date;
      if(element >= top && element <= down){
        resultBest.push(this.bestSell[index]);
      }
    }
    for (let index = 0; index < this.topSell.length; index++) {
      const element = this.topSell[index].date;
      if(element >= top && element <= down){
        resultTop.push(this.topSell[index]);
      }
    }
    this.dataBest = resultBest;
    this.dataTop = resultTop;
  }

  menu(){
    this.active = 'menu';
  }
  dashboard(){
    this.active = 'dashboard';
  }

  openCalendar(): void{
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: {start: this.startDate, end: this.endDate }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.startDate = result.startDate;
        this.endDate = result.endDate;
        this.filter(this.startDate,this.endDate);
      }
    });
  }

  }

