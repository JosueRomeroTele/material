import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { movieDto } from '../../components/dto/movieDto';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
    private peliSource = new BehaviorSubject<movieDto | null>(null);
    currentPeli = this.peliSource.asObservable();

    private IdCharacterSource = new BehaviorSubject<string | null>(null);
    currentIdCharacter = this.IdCharacterSource.asObservable();

  constructor() {}

  setPeli(movie: movieDto) {
    this.peliSource.next(movie);
  }

  setIdCharacter(id:string){
    this.IdCharacterSource.next(id);
  }

}