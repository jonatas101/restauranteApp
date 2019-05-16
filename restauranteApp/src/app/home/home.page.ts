import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menu: MenuController,
              public navCtrl: NavController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
