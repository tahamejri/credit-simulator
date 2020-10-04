import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.css']
})
export class SelectGroupComponent implements OnInit {
  @Output() update: EventEmitter<any> = new EventEmitter();
  activeSelect : boolean = false ;
  constructor() { }
  onclickselect = (evt) => {
    this.activeSelect = true
  }
  handleChange = (evt)=>{  
      
    this.update.emit({type:evt.target.value})  
    setTimeout(() => {
      this.activeSelect = false

    }, 10);
 
  }
  knwMoreClick = (element) => {
    
  }
  ngOnInit(): void {
  }

}
