import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FundacionesPage } from '../fundaciones/fundaciones';
import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  list_fundaciones(){
    this.navCtrl.push(FundacionesPage);
  }

  salir(){
    this.navCtrl.push(WelcomePage);
  }

}
