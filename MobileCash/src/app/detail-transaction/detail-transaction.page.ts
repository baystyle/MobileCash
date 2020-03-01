import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.page.html',
  styleUrls: ['./detail-transaction.page.scss'],
})
export class DetailTransactionPage implements OnInit {
  @Input() transaction
  constructor(private modalCtr:ModalController) { }

  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

}
