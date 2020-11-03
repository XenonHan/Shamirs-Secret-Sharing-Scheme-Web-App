import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipEncryptionComponent } from './zip-encryption.component';

describe('ZipEncryptionComponent', () => {
  let component: ZipEncryptionComponent;
  let fixture: ComponentFixture<ZipEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipEncryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
