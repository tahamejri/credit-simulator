import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-side-info',
  templateUrl: './side-info.component.html',
  styleUrls: ['./side-info.component.css']
})
export class SideInfoComponent implements OnInit {
  @Input() description;

  constructor() { }

  ngOnInit(): void {
    console.log(this.description);
    
  }
}
