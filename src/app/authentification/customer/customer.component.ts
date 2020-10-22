import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
  public isSign: boolean;
  public isSignText: boolean;
  public left : boolean;
  public right : boolean;
  public left1: boolean;
  public right1 : boolean;
  public test : boolean;
  constructor() { }

  ngOnInit(): void {
    this.isLogin = true;
    this.isSignText = true;
    this.isLoginText = false;
    this.isSign = false;
    this.left = false;
    this.right = false;
    this.left1 = false;
    this.right1 = false;
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

}
