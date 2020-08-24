import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCmsComponent } from './third-cms.component';

describe('ThirdCmsComponent', () => {
  let component: ThirdCmsComponent;
  let fixture: ComponentFixture<ThirdCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
