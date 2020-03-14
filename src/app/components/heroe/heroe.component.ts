import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    heroe: any = {};

  constructor( private activateRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _heroesService: HeroesService
    ) {

    this.activateRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      this.heroe = this._heroesService.getHeroe( params['id'] );
    } );

  }


}
