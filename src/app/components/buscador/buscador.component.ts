import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];
      // tslint:disable-next-line: no-string-literal
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
    });

  }


}
