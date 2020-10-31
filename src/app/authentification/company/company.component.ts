import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [
    trigger('leftright1', [
      state('right', style({
        transform: 'translateX(150%)',
      })),
      state('left',   style({
        transform: 'translateX(0)',
      })),
      transition('left => right', animate('600ms ease-in')),
      transition('right => left', animate('600ms ease-in'))
    ]),
    trigger('rightleft1', [
      state('left1', style({
        transform: 'translateX(-66%)',
      })),
      state('right1',   style({
        transform: 'translateX(0)',
      })),
      transition('left1 => right1', animate('600ms ease-in')),
      transition('right1 => left1', animate('600ms ease-in'))
    ]),
  ]
})
export class CompanyComponent implements OnInit {
  public isLogin : boolean;
  public isLoginText: boolean;
  public isSign: boolean;
  public isSignText: boolean;
  public left : boolean;
  public right : boolean;
  public left1: boolean;
  public right1 : boolean;
  public test : boolean;
  public isError: boolean;
  public isConfirmError : boolean;
  public isSignError : boolean;
  public cpass : any;
  
  constructor(private fb: FormBuilder) { }

  public loginForm = this.fb.group({
    lemail: new FormControl('', [Validators.required, Validators.email]),
    lpass: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  public signForm = this.fb.group({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    tel: new FormControl('', [Validators.required,Validators.minLength(8)]),
    spass: new FormControl('', [Validators.required,Validators.minLength(6)]),
    //cpass: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.isLogin = true;
    this.isSignText = true;
    this.isLoginText = false;
    this.isSign = false;
    this.left = false;
    this.right = false;
    this.left1 = false;
    this.right1 = false;
    this.isError = true;
    this.isConfirmError = false;
    this.isSignError = true;
  }

  get stateName() {
    return this.left ? 'right' : 'left';
  }
  get stateName1() {
    return this.right1 ? 'left1' : 'right1';
  }

  createAccount($event) {
    this.left = !this.left;
    this.right1 = !this.right1;
    this.isSignText = false;
    this.isLoginText = true;
    this.isLogin = false;
    this.isSign = true;
  }
  connexion($event){
    this.left = !this.left;
    this.right1 = !this.right1;
    this.isLoginText = false;
    this.isLogin = true;
    this.isSign = false;
    this.isSignText = true;
  }
  onSubmit(){
    this.isError = false;
    console.log(this.loginForm);
    console.log(this.loginForm.controls['lemail'].value);
    this.loginForm.reset();
  }
  change($event){
    this.cpass = $event.target.value;
    console.log(this.cpass);
  }
  onSignSubmit(){
    //var cpass = this.signForm.controls['cpass'].value;
    var spass = this.signForm.controls['spass'].value;
    if(this.cpass ==! spass){
      this.isConfirmError = true;
      this.isSignError = true;
      this.signForm.reset();
    }
    console.log(this.signForm);
  }
}
