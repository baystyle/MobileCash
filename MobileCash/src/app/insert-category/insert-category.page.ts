import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.page.html',
  styleUrls: ['./insert-category.page.scss'],
})
export class InsertCategoryPage implements OnInit {

  private categoryName
  constructor(private modalCtr: ModalController, private alertCtr: AlertController, private acccount: AccountService, private http: HttpClient) { }


  ngOnInit() { }

  async close() {
    await this.modalCtr.dismiss();
  }

  insertCategory() {
    let url = 'http://localhost/Mcash/Category/insertCategory.php';
    let dataPost = new FormData();
    dataPost.append("cate_name", this.categoryName);

    let data: Observable<any> = this.http.post(url, dataPost);
    data.subscribe(data => {
      console.log("insert success!!!");
    })
  }

  async conFirm() {
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
            this.insertCategory()
            this.successAlert()
            this.close()
            // this.t3.ngOnInit()
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
