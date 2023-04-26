import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTop5Page } from './my-top5.page';

describe('MyTop5Page', () => {
  let component: MyTop5Page;
  let fixture: ComponentFixture<MyTop5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyTop5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
