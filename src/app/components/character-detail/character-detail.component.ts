import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/service/message/message.service';
import { MovieService } from 'src/app/service/movieSevice/movie.service';
import { personajeDetalleDto } from '../dto/personajeDetalleDto';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {

  id:string='';
  personaje:any;
  nickname:string[];
  mangas:string[]=[]
  voices:any[]=[]
  constructor(private movieService: MovieService,public messageService: MessageService,private router:Router,private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
    this.personaje={};
    this.nickname=[]

  }


  ngOnInit() {
    this.getDetalles()
  }

  getDetalles(){
    this.messageService.getDetailCharacterMovies(this.id).subscribe((res)=>{
      console.log('valor de detalles personajes')
      console.log(res.data)
      this.personaje = res.data
      console.log('valor de personaje')
      console.log(this.personaje)
      console.log(this.personaje.name)

      this.realizarOtrasAcciones(); // 

    });
    
    // console.log(this.personaje.images.jpg.image_url)
  }

  realizarOtrasAcciones() {

    this.personaje.nicknames.forEach((element:string) => {    
      this.nickname.push(element)
    });

    this.personaje.manga.forEach((e:any)=>{
      this.mangas.push(e.manga.title)
    })

    this.personaje.voices.forEach((res:any)=>{
      const voice = {
        person: res.person.name,
        language:res.language,
        imagen:res.person.images.jpg.image_url
      }
      this.voices.push(voice)
    })

    console.log('mangas')
    console.log(this.mangas)

    console.log('voices')
    console.log(this.voices)
  }

  casa(){
    this.router.navigate(['/'])
  }
  
}
