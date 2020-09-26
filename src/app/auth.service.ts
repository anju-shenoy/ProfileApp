import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ToastController, LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl= "https://devgroceryapi.spericorn.com/api/auth/register";
  loginURL= "https://devgroceryapi.spericorn.com/api/auth/login";
  result: any;
  responseData: any;
  constructor(private http: HttpClient,
              private toasterCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private route: Router) { }
            }
