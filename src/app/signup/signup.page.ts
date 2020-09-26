import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  error_messages = {
  
    'email': [
      { type: 'required', message: 'Email is required.' },
     
      { type: 'email', message: 'please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
     
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
    
    ],
  }
  constructor( public formBuilder: FormBuilder,private route: Router, private authService: AuthService, public toastCtrl: ToastController) {
    this.loginForm = this.formBuilder.group({
    
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
       
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
        
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
        
      ])),
    }, { 
      // validators: ConfirmValidators('password','confirm_password')
    });
   }

  ngOnInit() {
  }
  // registerEnter(){
  //     this.authService.registerData(this.userData.email, this.userData.password, this.userData.cpassword)
  //     .subscribe(data => {
  //       this.responseData = data;
  //       console.log(data);
  //     })
  //     }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit(form: NgForm){
    if ( !form.valid){
    return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

} 

onSignUp(){
console.log('clicked');
this.route.navigateByUrl('/home');
}
}
