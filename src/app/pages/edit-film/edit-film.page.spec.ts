import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFilmPage } from './edit-film.page';

describe('EditFilmPage', () => {
  let component: EditFilmPage;
  let fixture: ComponentFixture<EditFilmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
