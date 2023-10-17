import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class MessageService {

  constructor(private http: HttpClient) {}
  

  getMovies():Observable<any> {
    return this.http.get("https://api.jikan.moe/v4/anime?q=one piece&type=Movie")
  }

  getCharacterMovies(mal_id:string):Observable<any> {
   const uri = `https://api.jikan.moe/v4/anime/${mal_id}/characters`
    return this.http.get(uri)
  }

  getDetailCharacterMovies(character_mal_id:string):Observable<any> {
    const uri = `https://api.jikan.moe/v4/characters/${character_mal_id}/full`
     return this.http.get(uri)
   }

}