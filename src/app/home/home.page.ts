import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading = false;
  isLogin = true;
  userData = { "email":"", "password": ""};
  result: any;
  constructor(    private route: Router,
                  private loadingCtrl: LoadingController,
                  private authService: AuthService) {
                    // if(localStorage.getItem('userdata')){
                    //   this.route.navigate(['/mainpage']);
                    // }
                  }

  // signin(){
  //   this.authService.loginData(this.userData.email, this.userData.password).subscribe( data => {
  //     this.result = data;
  //   })
  // }
  onSubmit(form: NgForm){
    if ( !form.valid){
    return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

}

onLogin(){
console.log('clicked');
this.route.navigateByUrl('/profile');
}
}