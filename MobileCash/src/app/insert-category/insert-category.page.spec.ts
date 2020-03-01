import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertCategoryPage } from './insert-category.page';

describe('InsertCategoryPage', () => {
  let component: InsertCategoryPage;
  let fixture: ComponentFixture<InsertCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
