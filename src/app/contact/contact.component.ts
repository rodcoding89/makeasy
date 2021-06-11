import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators } from "@angular/forms";
import { HandlingDataService } from '../services/handling-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public isLoader : boolean;
  public url = 'http://localhost:3535';
  
  constructor(private fb: FormBuilder,private handlingdata:HandlingDataService) { }

  public contactForm = this.fb.group({
    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    subject : new FormControl('',[Validators.required]),
    message : new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
    this.isLoader = false;
  }

  contact(){
    console.log('data');
    this.handlingdata.handlingSendMessage(this.url,this.contactForm.value).subscribe(
      res => {
        console.log(res);
        if(res.message == 'successfull'){
          alert("Message envoyé");
        }else if(res.message == 'error'){
          alert("Message non envoyé réessayé plus tard");
        }
      },
      err => {
        console.log(err);
        alert("Message non envoyé réessayé plus tard");
      }
    )
  }

}
