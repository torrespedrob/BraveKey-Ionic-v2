import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.authService.logout()
  }

  createUser() {
    this.authService.createUser(this.email, this.password)
      .then(
        () => {
          this.router.navigateByUrl('/list');
        }
      ).catch(
        () => this.alertError()
      )
  }

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Error en la creación de cuenta',
      message: 'El correo <strong>' + this.email + '</strong> ya está registrado en el sistema, pruebe utilizando otro email.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
