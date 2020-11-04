import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitroomPage } from './waitroom.page';

describe('WaitroomPage', () => {
  let component: WaitroomPage;
  let fixture: ComponentFixture<WaitroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
