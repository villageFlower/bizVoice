import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QnaSolutionPage } from './qna-solution.page';

describe('QnaSolutionPage', () => {
  let component: QnaSolutionPage;
  let fixture: ComponentFixture<QnaSolutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnaSolutionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QnaSolutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
