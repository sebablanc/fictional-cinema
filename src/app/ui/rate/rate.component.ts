import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent  implements OnInit, OnChanges {
  @Input('rate') filmRate: number = 0;
  @Output('data') sendDataRate: EventEmitter<number> = new EventEmitter();
  stars: string[] = Array(5).fill('star-outline');

  constructor() {
  }
  
  ngOnInit() {
  }
  
  ngOnChanges(){
    this.stars = Array(5).fill('star-outline');
    this.stars.fill('star', 0, this.filmRate)
  }

}
