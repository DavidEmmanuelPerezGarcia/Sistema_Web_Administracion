import { map } from 'rxjs/operators';
import { GetPokemonResponse } from './../../models/pokemon/getPokemonResponse.model';
import { Pokemon } from './../../models/pokemon/pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemonEnpoints } from 'src/app/global/endpoints';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<GetPokemonResponse>(pokemonEnpoints.pokemon)
      .pipe(
        map(res => {
          return res.results;
        })
      )
  }
}
