import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { HandlingDataService } from '../../services/handling-data.service';
import {ElementRef,ViewChild} from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
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
export class CustomerComponent implements OnInit {
  public isLogin : boolean;
  public isLoginText: boolean;
  public isSuccess: boolean;
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
  public url = 'http://localhost:3535';
  
  constructor(private fb: FormBuilder,private handler: HandlingDataService,private router:Router) { }

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
    cpass: new FormControl('', [Validators.required,Validators.minLength(6)]),
  },{validator: this.MatchPassword('spass', 'cpass'),});

  MatchPassword(spass: string, cpass: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[spass];
      const confirmPasswordControl = formGroup.controls[cpass];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
  

  ngOnInit(): void {
    this.isLogin = true;
    this.isSignText = true;
    this.isLoginText = false;
    this.isSign = false;
    this.left = false;
    this.right = false;
    this.left1 = false;
    this.right1 = false;
    this.isConfirmError = false;
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
    this.router.navigate(['dashboard']);
    /*this.handler.handlingLogin(this.url,this.loginForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['dashboard']);
      },
      err => {
        console.log('Error occured:' , err);
      }
    );*/
    
    
    this.loginForm.reset();
  }
  
  onSignSubmit(){
    this.isSignError = false;
    
    var spass = this.signForm.get('spass').value;
    var cpass = this.signForm.get('cpass').value;

    if(cpass !== spass){
      this.isConfirmError = true;
    }else{
      /*this.isConfirmError = false;
      this.handler.handlingSignCustomer(this.url,this.signForm.value).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured:' , err);
        }
      );*/
      
    }
    this.signForm.reset();
  }

}
