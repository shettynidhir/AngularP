import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedbacktab',
  templateUrl: './feedbacktab.component.html',
  styleUrls: ['./feedbacktab.component.css']
})
export class FeedbacktabComponent {
  @Input() fdback:any;

}
