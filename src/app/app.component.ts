import { Component ,OnInit} from '@angular/core';

import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'clientInnople';
  loginform:any;
  issubmited=false;


  constructor(private builder:FormBuilder){ 
   }

  ngOnInit(): void {
    this.loginform = this.builder.group({
          user:["",Validators.required],
          password:["",Validators.required]
    })
  }

  get f(){
    return this.loginform.controls;
  }

  checklogin(){
    this.issubmited=true;

//console.log(this.loginform.controls)


    if(this.loginform.invalid)
    return


    
  }

}
