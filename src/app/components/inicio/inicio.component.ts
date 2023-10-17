import { Component } from '@angular/core';
import { MessageService } from '../../service/message/message.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { movieDto } from '../dto/movieDto'
import { MatDialog } from '@angular/material/dialog';
import { ModalMovieComponent } from '../modal/modal-movie/modal-movie.component';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movieSevice/movie.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  lista: any;
  displayedColumns: string[] = ['title', 'score', 'type', 'duration'];


  movieList: movieDto[] = [];

  ELEMENT_DATA: movieDto[] = [];


  dataSource = new MatTableDataSource(this.movieList);
  constructor(public messageService: MessageService,public dialog: MatDialog,private router:Router, private movieService: MovieService) {
  }



  ngOnInit() {
    this.getLista()

  }
  ngAfterViewInit() {
    this.getLista()
  }

  filtro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  getLista() {
 
    this.messageService.getMovies().subscribe((response) => {

      response.data.forEach((movie: movieDto) => {
        const peli: movieDto = {
          mal_id: movie.mal_id,
          title: movie.title,
          images: movie.images.jpg.image_url,
          aired: movie.aired,
          duration: movie.duration,
          rating: movie.rating,
          score: movie.score,
          source: movie.source,
          type: movie.type,
          synopsis:movie.synopsis
        }

        this.movieList.push(peli)
      });
      // console.log(this.movieList)

    })

  }

  onRowClick(movie: movieDto) {
    this.movieService.setPeli(movie);
    this.router.navigate(['movie/details']);
  }
}
