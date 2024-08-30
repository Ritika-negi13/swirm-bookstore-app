import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
<<<<<<< HEAD
=======
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http/http.service';
import { Router } from '@angular/router';
>>>>>>> b347d65f2a4cc08d1202c29e5508fcc6bd0d3c10

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss']
})
export class LoginsignupComponent {
  loginForm!:FormGroup;
  signupForm!:FormGroup;
<<<<<<< HEAD
  onSubmit(){}
=======
  flag='login';
  constructor(private fb:FormBuilder,private http:HttpService,private router:Router) {}

 ngOnInit(): void {
   this.loginForm =this.fb.group({
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required]]
   });
   this.signupForm=this.fb.group({
    fullName:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    phone:['',[Validators.required]]
   })
  }
  login(){
    if(this.loginForm.invalid) return;
    const {email,password}=this.loginForm.value;
    console.log({email,password})
    this.http.userlogin('/login',{email,password}).subscribe({
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
    const {fullName,email,password,phone}=this.signupForm.value;
    console.log({fullName,email,password,phone}) 
    this.http. usersignup('/registration',{fullName,email,password,phone}).subscribe({
      next:(res : any)=>{
        console.log(res);
      window.location.reload();
    },
    error:(err)=>{
      console.log("err",err);
    }})
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

>>>>>>> b347d65f2a4cc08d1202c29e5508fcc6bd0d3c10
}
