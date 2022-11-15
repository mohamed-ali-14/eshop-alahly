import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlabsComponent } from './mlabs.component';

describe('MlabsComponent', () => {
  let component: MlabsComponent;
  let fixture: ComponentFixture<MlabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
