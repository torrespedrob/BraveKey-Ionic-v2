import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Build } from 'src/app/model/build';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { BuildService } from 'src/app/services/build.service';
import { Storage } from '@ionic/storage';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  builds: Observable<Build[]>;
  copiaBuilds = [];
  fechaActual: Date;


  constructor(
    public buildService: BuildService,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    private storage: Storage

  ) {
    this.authService.getCurrentUser().subscribe(
      () => {
        this.builds = buildService.getBuilds();
        this.builds.subscribe(
          data => this.copiaBuilds = data
        );
      }
    );

    this.storage.create();
    this.storage.set('fechaFinalApp', new Date(2021,5,24,19,0,0))
    

  }

  ngOnInit() {
    this.storage.set('fechaActual', '' + new Date());
    this.storage.get('fechaActual').then((value) => {
      console.log('fecha actual:', value);
    })
    



    this.storage.set('my_key', 'my_value');
    this.storage.get('my_key').then((value) => {
    });

    


    //this.storage.get('' + this.fechaAnterior);

    /*if (Math.floor((this.fechaReciente - this.fechaAnterior) / (1000*60*60*24)) > 30) {
      this.alertTutorial();
      this.storage.set(this.fechaAnterior.toISOString(), this.fechaAnterior = new Date(Date.now()))  ;
    }*/
  }
  

  addBuild() {
    this.router.navigateByUrl('/create-build');
  }

  goEditBuild(id: number) {
    this.router.navigateByUrl('/edit-build/' + id);
  }
  async alertTutorial() {
    const alert = await this.alertController.create({
      header: 'Bienvenido a BraveKey',
      message: 'Utiliza el botón "+" flotante para añadir un nuevo teclado, una vez hecho, podrás editarlos o eliminarlos respectivamente con los iconos de lápiz y basura que aparecen en las tarjetas.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async alertStorage() {
    const alert = await this.alertController.create({
      header: 'Almacenamiento Local',
      message: 'La fecha actual es ' + await this.storage.get('fechaActual') + '.<br><br> La fecha en la que se completó la app es ' +
      await this.storage.get('fechaFinalApp'),
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
