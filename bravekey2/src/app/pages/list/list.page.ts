import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Build } from 'src/app/model/build';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { BuildService } from 'src/app/services/build.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  builds: Observable<Build[]>;
  copiaBuilds = [];

  constructor(
    public buildService: BuildService,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,

  ) {
    this.authService.getCurrentUser().subscribe(
      () => {
        this.builds = buildService.getBuilds();
        this.builds.subscribe(
          data => this.copiaBuilds = data
        );
      }
    );


  }

  ngOnInit() {
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
}
