import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsServiceService } from 'src/app/services/details-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  id:any=0;
   details:any;
  constructor(private ds:DetailsServiceService,private ar:ActivatedRoute){
     this.ar.params.subscribe(
       {
         next: (params)=>{ 
          this.id =params['id']
          this.readData()
         },
         error: () => this.id = 0
       }
     )
  }

  readData(){

     this.ds.getDetails(this.id).subscribe({
        next: (data:any)=> this.details=data,
        error: ()=> this.details = {}
     })

    
  }

}
