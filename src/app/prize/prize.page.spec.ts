import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrizePage } from './prize.page';

describe('PrizePage', () => {
  let component: PrizePage;
  let fixture: ComponentFixture<PrizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
