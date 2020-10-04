import axios  from 'axios'
import { Observable } from 'rxjs/Observable';


export class RestServices {
    
    public submitCreditReq (topost){  

        axios.post('http://localhost:3002/demand',topost,topost)
        .then(function (response) {
          })

    }

    
    public getpreData () {
        let data
            axios.get('http://localhost:3002/creditDetails')
            .then((response) => {
                data = response
          })
          return data
          }
    }