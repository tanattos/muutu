import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FundacionesPage } from '../fundaciones/fundaciones';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private toast: ToastController) {

  }

  list_fundaciones(){
    this.navCtrl.push(FundacionesPage);
  }

  salir(){
    this.navCtrl.push(WelcomePage);
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
      this.toast.create({
        // message: 'Bienvenido a Muutu, ${data.email}',
        message: 'Bienvenido a Muutu',
        duration: 3000
      }).present();
    }
    else{

      this.toast.create({
        message: 'No se encuentra registrado',
        duration: 3000
      }).present();

    }
    })
  }



}
