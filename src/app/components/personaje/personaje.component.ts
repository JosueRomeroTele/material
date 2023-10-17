import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/service/message/message.service';
import { MovieService } from 'src/app/service/movieSevice/movie.service';
import { personajeListDto } from '../dto/personajeDto';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  id:string='';
  cardList:personajeListDto[]=[]

  constructor(private movieService: MovieService,public messageService: MessageService,private router:Router,private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

  }


  ngOnInit() {
    // this.movieService.currentIdCharacter.subscribe((id) => (this.id = id));
    console.log('valor siguiente vista personajes')
    console.log(this.id)

    this.getPersonajes()
  }

  getPersonajes(){
    this.messageService.getCharacterMovies(this.id).subscribe((response)=>{
      
      console.log('valores en personaje componente')
      console.log(response)

      response.data.forEach((element:personajeListDto) => {
        const personaje: personajeListDto={
          mal_id:element.character.mal_id,
          images:element.character.images.jpg.image_url,
          name:element.character.name,
          role:element.role,
          voice_actors:element.voice_actors
        }

        console.log(personaje)
        this.cardList.push(personaje)
      });

      console.log(this.cardList)
    })
  }
  
  verHistoria(malId: string| undefined) {
    if (malId !== undefined) {
      this.router.navigate(['characterDetail', malId]);
    } 
  }

}
