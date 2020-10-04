import { Component, OnInit } from '@angular/core';
import {InputGroupComponent} from '../input-group/input-group.component'
import axios  from 'axios'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  desData :any
  credData:any
  description : any
  activate:boolean = false ;
  constructor() { }
  onUpdate = (evt)=>{  
      
        this.description = {des:this.desData[evt.type].des,title:this.desData[evt.type].title,logo:this.desData[evt.type].logo}
        console.log(this.description);
        
    }
  
  ngOnInit(): void {
    axios.get('http://localhost:3002')
     .then((response)=>{
      this.desData=response.data
      
      this.description={des:this.desData[0].des,title:this.desData[0].title,logo:'car'}
      this.activate = true
    })
    
    axios.get('http://localhost:3002/creditDetails')
    .then((response) => {
          this.credData = response.data ;
    })
  }
  

}
