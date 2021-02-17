import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultComponent } from './default.component';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultComponent,FaIconComponent, ],
      imports: [ NgbModule,RouterTestingModule   ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
