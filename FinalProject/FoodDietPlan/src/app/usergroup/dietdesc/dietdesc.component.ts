import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-dietdesc',
  templateUrl: './dietdesc.component.html',
  styleUrls: ['./dietdesc.component.css']
})
export class DietdescComponent {
  id:number=0;
  singlediet:any;
  constructor(private ds:MainserviceService,private ar:ActivatedRoute){
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

 readData()
 {

    this.ds.getSingleDiet(this.id).subscribe({
       next: (data:any)=> this.singlediet=data,
       error: ()=> this.singlediet = {}
    })

   
 }

}
