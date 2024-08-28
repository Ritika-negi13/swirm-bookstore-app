import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss']
})
export class LoginsignupComponent {
  loginForm!:FormGroup;
  signupForm!:FormGroup;
  onSubmit(){}
}
