import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Film } from 'src/app/models/film';
import { DateFormatPipe } from 'src/app/pipes/date-formatter/date-format.pipe';

@Component({
  selector: 'app-edit-film-form',
  templateUrl: './edit-film-form.component.html',
  styleUrls: ['./edit-film-form.component.scss'],
})
export class EditFilmFormComponent  implements OnInit {
  @Input('film') filmToEdit: Film = new Film();
  @Output('data') sendFormData: EventEmitter<Film> = new EventEmitter();
  
  editForm: FormGroup = new FormGroup({});
  
  constructor(private datePipe: DateFormatPipe) {
  }

  ngOnInit() {
    let date = new Date(this.filmToEdit.released);
    let formatDate = this.datePipe.transform(date, '-');
    this.editForm = new FormGroup({
      id: new FormControl(this.filmToEdit.id),
      title: new FormControl(this.filmToEdit.title, Validators.required),
      released: new FormControl(formatDate, Validators.required),
      plot: new FormControl(this.filmToEdit.plot, Validators.required),
      poster: new FormControl(this.filmToEdit.poster, Validators.required),
    });
  }

}
