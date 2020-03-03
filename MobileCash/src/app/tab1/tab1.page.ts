import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private dateCurrent;
  private balance;
  private account;
  private startDate = this.datePipe.transform(new Date(),'dd/MM/yyyy');
  private endDate = this.datePipe.transform(new Date(),'dd/MM/yyyy');
  private totalCost;
  private sumCost = 0;

  constructor(private datePipe:DatePipe,private http:HttpClient) {

    this.dateCurrent = this.datePipe.transform(new Date(),'dd/MM/yyyy');
    console.log("123123123" + this.dateCurrent);
    
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
    this.startDate = this.datePipe.transform(this.startDate,'yyyy-MM-dd');
    this.endDate = this.datePipe.transform(this.endDate,'yyyy-MM-dd');
    console.log(this.startDate +"//// "+ this.endDate);
    this.sumCost = 0;
    dataPost.append("start_date",this.startDate);
    dataPost.append("end_date",this.endDate);

    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log(data);
      this.totalCost = data;
    }) 
    
  }

  suma (valor){
    this.sumCost += parseInt(valor);
    console.log(valor + "+=" +this.sumCost)
  }
}
