import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private account
  private username
  private password

  constructor(private modalCtr:ModalController,private navCtr:NavController, private http:HttpClient, private toastCtr:ToastController, private userAccount:AccountService) {
    this.getAccount()
  }

  ngOnInit() {
  }

  getAccount(){
    let url = 'http://localhost/MCash/Account/getAccount.php';
    let data:Observable<any> = this.http.post(url,'');
    data.subscribe(data => {
      this.account = data
      console.log(data);
    })    
  }

  async register() {
    console.log("addTransaction clicked")
    const modal = await this.modalCtr.create({
      component: RegisterPage
    });
    return await modal.present().then(_=>{})
  }

  login(){
    console.log("out");
    
    var checkUser = 0
    var index
    for (const key in this.account) {
      if(this.username == this.account[key].acc_username && this.password == this.account[key].acc_password){
          checkUser = 1
          index = key
        }
    }

    if(checkUser == 1){
      console.log("11");
      
      console.log(this.account);
      this.userAccount.setAccount(this.account[index].acc_id,this.account[index].acc_fname,this.account[index].acc_lname,this.account[index].acc_balance)
      this.navCtr.navigateRoot("/tabs/summary")
    }
    else{
      console.log("22");
      
      this.ToastLoginError()
    }
  }

  async ToastLoginError() {
    const toast = await this.toastCtr.create({
      message: 'ชื่อบัญชีผู้ใช้ หรือ รหัสผ่านผิด',
      duration: 2000
    });
    toast.present();
  }


  

}
