import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-slider-group',
  templateUrl: './slider-group.component.html',
  styleUrls: ['./slider-group.component.css']
})
export class SliderGroupComponent implements OnInit {
  @Input() data;
  @Output() update: EventEmitter<any> = new EventEmitter();
  constructor() { }
  value: number = 100;
  options: Options

  valueChange = (evt)=>{
    this.update.emit({evt,type:this.data.type})
  }
  ngOnInit(): void {

this.options = {
  minLimit:1,
  showTicksValues: true,
  tickValueStep: 5 ,
  floor: 0,
  ticksArray:this.data.steps,
  ceil: this.data.max,
  step: this.data.step,
  showSelectionBar: true,
  getSelectionBarColor: () => {
    return '#E9502B';
  },
};
  }

}
