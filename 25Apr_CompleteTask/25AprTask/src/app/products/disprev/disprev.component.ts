import { Component ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsServiceService } from 'src/app/services/details-service.service';
import { ReviewServiceService } from 'src/app/services/review-service.service';

@Component({
  selector: 'app-disprev',
  templateUrl: './disprev.component.html',
  styleUrls: ['./disprev.component.css']
})

export class DisprevComponent 
{
 @Input() prdid:any;
 range:any=5;
 reviews:any;
  constructor(private ds:ReviewServiceService,private ar:ActivatedRoute)
  {
    
    this.ds.getReviews().subscribe({
      next: (data:any)=> this.reviews=data,
      error: ()=> this.reviews  =[]
    })
  }
}
  

  