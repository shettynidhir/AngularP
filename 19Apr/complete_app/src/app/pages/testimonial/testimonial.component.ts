import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedbacks:any;
  constructor(private fb:FeedbackService)
  {
    this.fb.getFeedback().subscribe(
      {
        next:(data:any)=>this.feedbacks=data,
        error:()=>this.feedbacks=[]
      }
    )
  }

}
