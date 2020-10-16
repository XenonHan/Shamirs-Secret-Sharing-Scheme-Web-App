import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEncryptionComponent } from './text-encryption.component';

describe('TextEncryptionComponent', () => {
  let component: TextEncryptionComponent;
  let fixture: ComponentFixture<TextEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEncryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
