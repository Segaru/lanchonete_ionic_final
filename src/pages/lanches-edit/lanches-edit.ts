import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Lanche, LanchesProvider } from '../../providers/lanches/lanche';


@IonicPage()
@Component({
  selector: 'page-lanches-edit',
  templateUrl: 'lanches-edit.html',
})
export class LanchesEditPage {
  lanche: Lanche;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private lanchesProvider: LanchesProvider) {
      this.lanche = new Lanche();

      if (this.navParams.data.id) {
        this.lanchesProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.lanche = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesEditPage');
  }

  save() {
    this.lanchesProvider.save(this.lanche)
      .then(() => {
        this.toast.create({ message: 'Lanche Salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o lanche.', duration: 3000, position: 'botton' }).present();
      });
  }


} 