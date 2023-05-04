import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-consultexpert',
  templateUrl: './consultexpert.component.html',
  styleUrls: ['./consultexpert.component.css']
})
export class ConsultexpertComponent {
  consultexp:any;
qid:any;
id:any;
userid:any;
questions:any;
answers:any;


 constructor(private fb:FormBuilder, private ms:MainserviceService,private ar:ActivatedRoute)
 {
  this.consultexp=this.fb.group({
    qid:[''],
    question:['']
  

  });
  this.ms.getQuestion().subscribe(
    {
      next:(data:any)=>this.questions=data,
      error:()=>this.questions=[]
    }
  )
 

  


 }

  
 saveQues()
 {
  var temp:any=
  {
    qid:Math.round(Math.random()*100000),
    question: this.consultexp.value.question
    // userid:this.consultexp.value.userid
      
  }

 
  this.ms.postQues(temp).subscribe(
    { 
     next: data=>{
       alert('Your Question is saved')
       location.reload();
     },
     error:(error)=>alert('Not saved ---some Error')
   }

   )

  

 }

}
