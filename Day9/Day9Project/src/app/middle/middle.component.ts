import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {
  @Input() maintxt:string=""
  @Input() subtxt:string=""

}
