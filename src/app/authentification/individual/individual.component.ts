import { Component, OnInit,HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { HandlingDataService } from '../../services/handling-data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
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
export class IndividualComponent implements OnInit {

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
  public isEmailUsed : boolean;
  public isTelUsed : boolean;
  public url = 'http://localhost:3535';
  public screenWidth : any;
  public isConn = true;
  
  @HostListener('window:resize', ['$event'])

  onResize(event) {

    this.screenWidth = window.innerWidth;

  }

  constructor(private fb: FormBuilder,private handler: HandlingDataService,private router:Router) { 
    console.log("size " ,this.screenWidth)
  }

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
  },{validator: this.comparePass('spass', 'cpass'),});

  comparePass(spass: string, cpass: string) {
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
    this.isEmailUsed = false;
    this.isTelUsed = false;
    this.screenWidth = window.screen.width;
    console.log("size " ,this.screenWidth)
  }

  get stateName() {
    return this.left ? 'right' : 'left';
  }
  get stateName1() {
    return this.right1 ? 'left1' : 'right1';
  }

  createAccount($event) {
    console.log(window.screen.width);
    if (window.screen.width <= 768) {
      this.isConn = false;
      console.log("test");
    } else {
      this.left = !this.left;
      this.right1 = !this.right1;
      this.isSignText = false;
      this.isLoginText = true;
      this.isLogin = false;
      this.isSign = true;
    }
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
    this.handler.handlingLoginIndividual(this.url,this.loginForm.value).subscribe(
      res => {
        console.log(res);
        if (res.data === 'pass') {
          
        }else if (res.data === 'email') {
          alert("Vos données sont incorrect");
          //console.log(res.data.data.message);
        }else if(res.data.status === 'success'){
          const data = res.data.name+"-"+res.data.id;
          localStorage.setItem("user",data);
          if(localStorage.getItem('user')){
            this.router.navigate(['dashboard']);
          }
          //this.router.navigate(['dashboard']);
        }else{
          alert(res.data);
        }
      },
      err => {
        console.log('Error occured:' , err);
        alert("Le Server ne reponds pas Veillé réssayé ulteurierement")
      }
    );
    
    
    this.loginForm.reset();
  }
  hideEmailErroru(){
    this.isEmailUsed =false;
  }
  hideTelErroru(){
    this.isTelUsed =false;
  }
  onSignSubmit(){
    //this.isSignError = false;
    
    //this.isConfirmError = false;
    this.handler.handlingSignIndividual(this.url,this.signForm.value).subscribe(
      res => {
        console.log(res);
        if (res.error == 'email') {
          this.isEmailUsed =true;
        }else if (res.error == 'tel') {
          this.isTelUsed =true;
        }
      },
      err => {
        console.log('Error occured:' , err);
      }
    );
    
    this.signForm.reset();
  }
}
