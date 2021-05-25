import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye-off';
  constructor(
    private authService: AuthService,
    private router: Router,
    public alertController: AlertController
  ) { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  email: string;
  password: string;

  ngOnInit() {
  }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('/list');
    } catch (t) {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ha ocurrido un error',
      subHeader: 'Fallo en el acceso.',
      message: 'Compruebe que el correo y contraseña introducidos sean válidos e inténtelo de nuevo.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
