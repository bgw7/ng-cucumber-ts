import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
pokemonId: number;
  constructor() { }

  ngOnInit() {
    this.pokemonId = Math.floor(Math.random() * (152 - 1) + 1);
  }

}
