import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocNgstyleComponent } from './poc-ngstyle.component';

describe('PocNgstyleComponent', () => {
  let component: PocNgstyleComponent;
  let fixture: ComponentFixture<PocNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocNgstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
