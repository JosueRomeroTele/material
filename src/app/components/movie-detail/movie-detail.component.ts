import { Component } from '@angular/core';
import { movieDto } from '../dto/movieDto';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movieSevice/movie.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {


  movie: movieDto|null=null;
  date:string='';

  constructor(private movieService: MovieService,public messageService: MessageService,private router:Router,) {
  }

  ngOnInit() {
    this.movieService.currentPeli.subscribe((movie) => (this.movie = movie));
    console.log('valor siguiente vista')
    console.log(this.movie)
    this.date=this.movie?.aired.string;
    this.getPersonajes()
  }


  getPersonajes(){
    const mal_id = this.movie?.mal_id;
    if(mal_id!=undefined){
      this.messageService.getCharacterMovies(mal_id).subscribe((res)=>{
        console.log('lista de personajes')
        console.log(res)
      });
    }
    
  }

  verPersonajes(){
    const id = this.movie?.mal_id;
    this.router.navigate(['/character', id]);
  }

  goBack() {
    this.router.navigate(['/'])
  }

 
}
