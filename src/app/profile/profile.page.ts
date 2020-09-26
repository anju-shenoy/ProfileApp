import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor( private route: Router,
    public actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }
  async presentModal(){
    // tslint:disable-next-line: no-unused-expression
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'My Account',
      buttons: [
        {
          text: 'Logout',
          icon: 'power',
          handler: () => {
             localStorage.clear();
            this.route.navigate(['/home']);
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
