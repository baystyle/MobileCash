import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {
  constructor(private modalCtr:ModalController, private alertCtr:AlertController, private account:AccountService,private http:HttpClient) { }
  @Input() category
  @Input() index
  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

  editCategory(){
    let url = 'http://localhost/Mcash/Category/editCategory.php';
    let dataPost = new FormData();
    dataPost.append("cate_id",this.category.cate_id);
    dataPost.append("cate_name",this.category.cate_name);
    let data:Observable<any> = this.http.post(url,dataPost);
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
            this.editCategory()
            this.successAlert()
            this.close()
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
