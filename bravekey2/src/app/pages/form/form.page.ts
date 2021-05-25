import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Build } from 'src/app/model/build';
import { BuildService } from 'src/app/services/build.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  build: Build = {name: '', pcb: '', switchManufacturer: '', switchType: '', keycaps: '', format: '', lubed: false, description: '', url: '', value: 0};
  pageTitle: string = "Nuevo elemento";
  id: string;
  action: string = "create";


  fabricantes = ['Cherry', 'Gateron', 'Kailh', 'Outemu'];
  switchesPorFabricante = {
    Cherry: ['Red', 'Black', 'Brown', 'Green', 'Blue', 'Clear'],
    Gateron: ['Red', 'Black', 'Yellow', 'Brown', 'Blue', 'Clear'],
    Kailh: ['Red', 'Black', 'Brown', 'Blue', 'Box Red', 'Box black', 'Box Brown', 'Box white', 'Box Pale Blue'],
    Outemu: ['Blue', 'Red', 'Black', 'Gazzew Boba', 'Gazzew Gum'],
  };
  switches = [];

  
  constructor(
    private buildService: BuildService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) { 

   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) { // edit mode
      this.pageTitle = "Editar elemento";
      this.action = "edit";
      this.buildService.getBuildById(this.id)
        .subscribe(
          data => this.build = data
        );
    }
  }

  addBuild() {
    if (this.action === 'create') {
      this.buildService.addBuild(this.build);
    } else {
      this.buildService.updateBuildById(this.id, this.build);
    }
    
    this.router.navigateByUrl('/list');
  }

  cambioFabricante(): void {
    this.switches = this.switchesPorFabricante[this.build.switchManufacturer];
    this._cdr.detectChanges();

  }
}
