import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  Pokemon:PokemonData = {       //inicializar a propriedade/objeto aqui ou  no construtor
    id: 0,
    name: '',
    sprites: {
      front_default:'',
    },
    types:[]

  }

constructor(
  private service:PokemonServiceService

){

  /*
  this.Pokemon = {     //ou aqui inicializar o que foi inicializado acima.
    id: 0,
    name: '',
    sprites: {
      front_default:'',
    },
    types:[]

  }
  */
}


  ngOnInit(): void {
this.getPokemon('pikachu');

/*   this.service.getPokemon("bulbasaur").subscribe(
    {
      next: (res) => {
this.Pokemon = {
  id: res.id,
  name: res.name,
  sprites: res.sprites,
  types: res.types

}


console.log(res)
console.log(this.Pokemon)
console.log(this.Pokemon.types)





      },


    next: (res) => {
      console.log(res)
      console.log(res.id)
      console.log(res.name)
      console.log(res.sprites.front_default)
      console.log(res.types)

    },

    error: (err) => console.log(err)


  })
  */
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(     //aqui colocar no nome do pokemon o nome do objeto criado 'searchName'
      {
        next: (res) => {
  this.Pokemon = {
    id: res.id,
    name: res.name,
    sprites: res.sprites,
    types: res.types

  }
},
error: (err) => console.log(err)
      }
    )
  }
}


