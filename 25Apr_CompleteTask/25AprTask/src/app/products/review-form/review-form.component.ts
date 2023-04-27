import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailsServiceService } from 'src/app/services/details-service.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

reviewForm:any;
id:any;


 constructor(private fb:FormBuilder, private ds:DetailsServiceService,private ar:ActivatedRoute )
 {
  this.reviewForm=this.fb.group({
    name:[''],
    review:['']

  });

  this.ar.params.subscribe(
    {
      next: (params)=>{ 
       this.id =params['id']
      
      },
      error: () => this.id = 0
    }
  )

 }

  
 saveReview()
 {
  var temp:any={
    
    product_id:this.id,
    review: this.reviewForm.value.review,
    name:this.reviewForm.value.name
  
  }

 
  this.ds.postDetails(temp).subscribe(
    { 
     next: data=>{
       alert('Your Feedback is saved')
       location.reload();
     },
     error:(error)=>alert('Not saved ---some Error')
   }

   )

 }
  
}
