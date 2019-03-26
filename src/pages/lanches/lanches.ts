import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LanchesProvider } from '../../providers/lanches/lanche';
import { LanchesEditPage } from '../lanches-edit/lanches-edit';

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {

  lanches: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public lanchesProvider: LanchesProvider
    , private toast: ToastController) {
      this.getLanches();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

  ionViewWillEnter() {
    this.getLanches();
  }

  getLanches() {
    this.lanchesProvider.findAll()
    .then(data => {
      this.lanches = data;
      console.log(this.lanches);
    });
  }
  removeLanche(id: number) {
    this.lanchesProvider.deleteById(id)
      .then( () => {
        this.getLanches();
        this.toast.create({ message: 'Lanche removido.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editLanche(id: number) {
    this.navCtrl.push(LanchesEditPage, {id: id});
  }

  addLanche() {
    this.navCtrl.push(LanchesEditPage);
  }


}  