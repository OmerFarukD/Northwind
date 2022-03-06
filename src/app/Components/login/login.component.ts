import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }
createLoginForm(){
this.loginForm=this.formBuilder.group({
  email:["",Validators.required],
  password:["",Validators.required]
})
}
login(){
  if (this.loginForm.valid) {
    this.toastrService.success("Sisteme giriş yapıldı.","Başarılı");
  }else{
    this.toastrService.error("Sisteme giriş yapılamadı.","Eksik bilgi girdiniz.");
  }
}
}
