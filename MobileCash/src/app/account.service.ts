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
    this.userID = accountID
    this.fname = accountFname
    this.lname = accountLname
    this.balance = accountBalance
    console.log("fname",this.fname);
    
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
