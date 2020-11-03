import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QnaDetailPage } from './qna-detail.page';

describe('QnaDetailPage', () => {
  let component: QnaDetailPage;
  let fixture: ComponentFixture<QnaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QnaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
