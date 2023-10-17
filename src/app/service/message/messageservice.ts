import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class MessageService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<any> {
    this.http.get("https://api.jikan.moe/v4/anime?q=one piece&type=Movie").subscribe((data: any) => {
      console.log(data);
      return data;
    });
  }

}
