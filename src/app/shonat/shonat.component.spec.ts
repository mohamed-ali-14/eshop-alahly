import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShonatComponent } from './shonat.component';

describe('ShonatComponent', () => {
  let component: ShonatComponent;
  let fixture: ComponentFixture<ShonatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShonatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShonatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
