import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage {

  private dateCurrent;
  private userAccount;
  private startDate;
  private endDate;
  private totalCost;
  private sumCostExpense = 0;
  private sumCostIncome = 0;
  private fname
  private lname
  private balance

  constructor(private datePipe:DatePipe,private http:HttpClient, private navCtr:NavController) {
    this.startDate = this.datePipe.transform(new Date());
    this.endDate = this.datePipe.transform(new Date());
    this.dateCurrent = this.datePipe.transform(new Date(),'dd/MM/yyyy');
    this.setAccount();
    //log
    console.log('id => ',sessionStorage.getItem('acc_id'));
    console.log('fname => ',sessionStorage.getItem('acc_fname'));
    console.log('lname => ',sessionStorage.getItem('acc_lname'));
    console.log('balance => ',sessionStorage.getItem('acc_balance'));
  }

  setAccount(){
    this.userAccount = sessionStorage.getItem('acc_id');  
    this.fname = sessionStorage.getItem('acc_fname');
    this.lname = sessionStorage.getItem('acc_lname');
    this.balance = sessionStorage.getItem('acc_balance');
  }

  calculate(){
    let url = 'http://localhost/Mcash/Transaction/calculateDate.php';
    let dataPost = new FormData();
    this.startDate = this.datePipe.transform(this.startDate,'yyyy-MM-dd');
    this.endDate = this.datePipe.transform(this.endDate,'yyyy-MM-dd');
    console.log(this.datePipe.transform(this.startDate,'yyyy-MM-dd') +"//// "+ this.datePipe.transform(this.endDate,'yyyy-MM-dd'));
    this.sumCostExpense = 0;
    this.sumCostIncome = 0;
    dataPost.append("start_date",this.datePipe.transform(this.startDate,'yyyy-MM-dd'));
    dataPost.append("end_date",this.datePipe.transform(this.endDate,'yyyy-MM-dd'));

    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log("calculate = > ",data);
      this.totalCost = data;
    }) 
    
  }

  sum_expense (valor){
    var num = parseInt(valor);
    this.sumCostExpense = this.sumCostExpense + num;
    console.log(valor + "+=" +this.sumCostExpense)
  }

  sum_income (valor){
    var num = parseInt(valor);
    this.sumCostIncome = this.sumCostIncome + num;
    console.log(valor + "+=" +this.sumCostIncome)
  }

  logOut(){
    sessionStorage.clear()
    this.navCtr.navigateRoot("/")
  }

}
