import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HombresPage } from './hombres.page';

describe('HombresPage', () => {
  let component: HombresPage;
  let fixture: ComponentFixture<HombresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HombresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HombresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
