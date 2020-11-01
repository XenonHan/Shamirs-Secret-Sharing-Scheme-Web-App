import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEncryptionComponent } from './image-encryption.component';

describe('ImageEncryptionComponent', () => {
  let component: ImageEncryptionComponent;
  let fixture: ComponentFixture<ImageEncryptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEncryptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
