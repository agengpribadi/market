import { formatDate } from '@angular/common';
import { Component, Inject, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCalendar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageService } from 'src/app/services/message.service';

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  dialogForm: FormGroup;
  active : any;
  nowDate = new Date(Date.now());
  startDate : Date;
  endDate : Date;
  minDate : Date;
  maxDate : Date;
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private messages : MessageService
    ) { }
    
  ngOnInit() {
    this.dialogForm = this.fb.group({
      'startDate': new FormControl(Date),
      'endDate': new FormControl(Date)
    });
    if(this.data.start === undefined && this.data.end === undefined){
      this.todayDate();
    } else {
      this.dialogForm.controls['startDate'].patchValue(this.data.start);
      this.dialogForm.controls['endDate'].patchValue(this.data.end);
    }
  }
  todayDate(){
    this.startDate = new Date(Date.now());
    this.endDate = new Date(Date.now());
    this.dialogForm.controls['startDate'].patchValue(this.startDate);
    this.dialogForm.controls['endDate'].patchValue(this.endDate);
    this.minDate = new Date(new Date().setMonth(this.startDate.getMonth() - 6));
    this.maxDate = new Date(new Date().setMonth(this.endDate.getMonth(), this.endDate.getDate() -1));
    this.active = 'today';
  }
  yesterdayDate(){
    this.startDate = new Date(new Date().setDate(new Date().getDate() - 1));
    this.endDate = new Date(new Date().setDate(new Date().getDate() - 1));
    this.dialogForm.controls['startDate'].patchValue(this.startDate);
    this.dialogForm.controls['endDate'].patchValue(this.endDate);
    this.minDate = new Date(new Date().setMonth(this.startDate.getMonth() - 6));
    this.maxDate = new Date(new Date().setMonth(this.endDate.getMonth(), this.endDate.getDate()));
    this.active = 'yesterday';
  }
  last7Date(){
    this.startDate = new Date(new Date().setDate(new Date().getDate() - 7));
    this.endDate = new Date(new Date().setDate(new Date().getDate() - 1));
    this.dialogForm.controls['startDate'].patchValue(this.startDate);
    this.dialogForm.controls['endDate'].patchValue(this.endDate);
    this.minDate = new Date(new Date().setMonth(this.startDate.getMonth() - 6));
    this.maxDate = new Date(new Date().setMonth(this.endDate.getMonth(), this.endDate.getDate()));
    this.active = 'last7day';
  }
  last30Date(){
    this.startDate = new Date(new Date().setDate(new Date().getDate() - 30));
    this.endDate = new Date(new Date().setDate(new Date().getDate() - 1));
    this.dialogForm.controls['startDate'].patchValue(this.startDate);
    this.dialogForm.controls['endDate'].patchValue(this.endDate);
    this.minDate = new Date(new Date().setMonth(this.startDate.getMonth() - 6));
    this.maxDate = new Date(new Date().setMonth(this.endDate.getMonth(),this.endDate.getDate()));
    this.active = 'last30day';
  }
  monthDate(){
    this.startDate = new Date(new Date().setMonth(new Date().getMonth(), new Date().getDate() - new Date().getDate() + 1 ));
    this.endDate = new Date(new Date().setMonth(new Date().getMonth(), new Date().getDate() - 1));
    this.dialogForm.controls['startDate'].patchValue(this.startDate);
    this.dialogForm.controls['endDate'].patchValue(this.endDate);
    this.minDate = new Date(new Date().setMonth(this.startDate.getMonth() - 6));
    this.maxDate = new Date(new Date().setMonth(this.endDate.getMonth(), this.endDate.getDate()));
    this.active = 'month';
  }
  customDate(){
    this.startDate = new Date(new Date().setMonth(new Date().getMonth() -6, 1));
    this.endDate = new Date(new Date().setMonth(new Date().getMonth(), new Date().getDate() -1));
    this.dialogForm.controls['startDate'].patchValue(this.startDate);
    this.dialogForm.controls['endDate'].patchValue(this.endDate);
    this.minDate = new Date(new Date().setMonth(new Date().getMonth() -6, 1));
    this.maxDate = new Date(new Date().setMonth(this.endDate.getMonth(), this.endDate.getDate()));
    this.active = 'custom';
  }
  onSelectStart(event) {
    this.dialogForm.get('startDate').setValue(event);
  }
  onSelectEnd(event) {
    this.dialogForm.get('endDate').setValue(event);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  dateStartFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 ;
  }

  dateEndFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6; 
  }

  apply(){
    if(this.active === 'today' && 
      (formatDate(this.dialogForm.get('startDate').value, 'yyyy-MM-dd', 'en-US') === formatDate(this.nowDate, 'yyyy-MM-dd', 'en-US') || 
      formatDate(this.dialogForm.get('endDate').value, 'yyyy-MM-dd', 'en-US') === formatDate(this.nowDate, 'yyyy-MM-dd', 'en-US'))
    ){
      this.messages.setMessage('warn', 'Today date cannot apply', 'Info')
    } else if(this.dialogForm.get('startDate').value > this.dialogForm.get('endDate').value){
      this.messages.setMessage('warn', 'Start Date cant be smaller from End Date', 'Info')
    }else {
      this.dialogRef.close(this.dialogForm.value);
    }
  }

}
