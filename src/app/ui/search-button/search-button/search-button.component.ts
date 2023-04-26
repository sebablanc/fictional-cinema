import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent  implements OnInit {
  @Output('data') dataSearchButton: EventEmitter<string> = new EventEmitter();
  valueInserted: string = '';

  constructor() { }

  ngOnInit() {}

  changeHandler(event: any){
    this.valueInserted = event.detail.value;
    this.dataSearchButton.emit(event.detail.value);
  }

}
