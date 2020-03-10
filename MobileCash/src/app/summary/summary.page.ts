import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage {

  private dateCurrent;
  private balance;
  private account;
  private startDate = this.datePipe.transform(new Date(),'dd/MM/yyyy');
  private endDate = this.datePipe.transform(new Date(),'dd/MM/yyyy');
  private totalCost;

  constructor(private datePipe:DatePipe,private http:HttpClient) {

    this.dateCurrent = this.datePipe.transform(new Date(),'dd/MM/yyyy');
    this.getAccount();
  
  }

  getAccount(){
    let url = 'http://localhost/MCash/Account/getAccount.php';
    let data:Observable<any> = this.http.post(url,'');
    data.subscribe(data => {
      this.balance = data[0].acc_balance
      this.account = data[0].acc_id
      console.log(this.balance);
      console.log(this.account);
    })    
  }

  calculate(){
    let url = 'http://localhost/Mcash/Transaction/calculateDate.php';
    let dataPost = new FormData();
    dataPost.append("start_date",this.startDate);
    dataPost.append("end_date",this.endDate);

    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log("success");
      this.totalCost = data[0].sum_amount;
      console.log("sum = ",this.totalCost);
    }) 
  }

}
