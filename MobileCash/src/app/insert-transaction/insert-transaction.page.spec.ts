import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertTransactionPage } from './insert-transaction.page';

describe('InsertTransactionPage', () => {
  let component: InsertTransactionPage;
  let fixture: ComponentFixture<InsertTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
