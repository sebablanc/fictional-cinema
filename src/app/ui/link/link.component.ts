import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent  implements OnInit {
  @Input('label') linkLabel: string = 'Press';
  @Output('linkClick') linkClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
