import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {RestServices} from '../../assets/services/restservices'
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Input() data : any
  restservice : RestServices
  type = 0
  total_amount =  25000 ;
  period = 12 ;
  mensuality = 36 ;
   
  data2 = this.data
  constructor(private router: Router) { 

  }
  onUpdate = (evt) => {
    let value = Math.round(evt.evt) ;
    let type = evt.type
      switch(type){
           
           case 'Montant souhaité':
            this.total_amount = value
            this.data.forEach(element => {
              if (element.type == 'Mensualité')
                element.value = value * 1.3 /this.period
            });
              break
           case 'Durée':
              this.period = value
              this.mensuality = Math.round(this.total_amount * 1.3 / this.period)
              this.data.forEach(element => {
                if (element.type == 'Mensualité')
                  element.value = Math.round(this.total_amount * 1.3 /this.period)
              });                                            
              break
           case 'Mensualité':
              this.mensuality = value
              this.period =   Math.round(this.total_amount * 1.3 / this.mensuality)
              this.data.forEach(element => {
                if (element.type == 'Durée')
                  element.value = Math.round(this.total_amount * 1.3 /this.mensuality)
              });                                            
              break
      }    
  }

  onClick = () =>{
    let topost = {type : this.type,
                  total_amount :  this.total_amount ,
                  period :this.period ,
                  mensuality : this.mensuality}
    this.restservice.submitCreditReq(topost) 
    this.router.navigateByUrl('simulator/submit');         
        
  }

  handleType = (evt)=>{
    this.type = evt.type
    this.update.emit({type:evt.type})
  }
  ngOnInit(): void {
    this.restservice = new RestServices
  }

}
