import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public fname;
  public lname;
  public userID;
  public balance;

  setAccount(accountID,accountFname,accountLname,accountBalance){
    this.userID = sessionStorage.getItem('acc_id');
    this.fname = sessionStorage.getItem('acc_fname');
    this.lname = sessionStorage.getItem('acc_lname');
    this.balance = sessionStorage.getItem('acc_balance');
  }


  getname(){
    return this.fname+" "+this.lname
  }

  getUserID(){
    return this.userID
  }

  getBalance(){
    return this.balance
  }

}
