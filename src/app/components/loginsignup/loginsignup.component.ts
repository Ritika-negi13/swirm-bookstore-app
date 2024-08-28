import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss']
})
export class LoginsignupComponent {
  loginForm!:FormGroup;
  signupForm!:FormGroup;
  flag='login';
  constructor(private fb:FormBuilder,private http:HttpService,private router:Router) {}

 ngOnInit(): void {
   this.loginForm =this.fb.group({
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required]]
   });
   this.signupForm=this.fb.group({
    fullname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    phone:['',[Validators.required]]
   })
  }
  login(){
    if(this.loginForm.invalid) return;
    const {email,password}=this.loginForm.value;
    console.log({email,password})
    return this.http.userlogin('/login',{email,password}).subscribe({
      next:(res : any)=>{
      localStorage.setItem("acesstoken",res.result.accessToken);
      this.router.navigate(['']);
    },
    error:(err)=>{
      console.log("err",err);
    }})
  }
  signup(){
    if(this.signupForm.invalid) return;
    const {fullname,email,password,phone}=this.loginForm.value;
    console.log({fullname,email,password,phone}) 
  }
  change(){
    if(this.flag==='login')
    {
      this.flag='signup';
    }
    else {
      this.flag='login';
    }
  }

}
