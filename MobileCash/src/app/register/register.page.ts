import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private username
  private password
  private email
  private accountType
  private accountTypeList
  private balance 

  constructor(private modalCtr:ModalController, private http:HttpClient, private alertCtr:AlertController) { 
    this.getAccountType()
    this.balance = 0
  }

  ngOnInit() {
  }

  register(){
    let url = 'http://localhost/mcash/Account/insertAccount.php';
    let dataPost = new FormData();
    dataPost.append('acc_username',this.username);
    dataPost.append('acc_password',this.password);
    dataPost.append('acc_email',this.email);
    dataPost.append('acc_type_id',this.accountType);
    dataPost.append('acc_balance',this.balance);
    
    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log("insert success!!!");
      this.close()
    }) 
    
  }

  getAccountType(){
    let url = 'http://localhost/mcash/Account/getAccountType.php';
    let data:Observable<any> = this.http.post(url,'');
    data.subscribe(data => {
      this.accountTypeList = data
      console.log(this.accountTypeList);
      
    })
  }

  async close() {
    await this.modalCtr.dismiss();
  }

  async conFirm(transaction) {
    const alert = await this.alertCtr.create({
      header: 'Comfirm!!',
      message: 'ต้องการบันทึกข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            this.register()
            this.successAlert()
          }
        }
      ]
    });

    await alert.present();
  }

  async successAlert() {
    const alert = await this.alertCtr.create({
      header: 'Completed!!',
      subHeader: 'บันทึกข้อมูลสำเร็จ',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }


}
