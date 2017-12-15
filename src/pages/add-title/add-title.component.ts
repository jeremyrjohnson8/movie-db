import { MovieService } from './../../services/movieservice/movie.service';
import { OMDBApiDto } from './../../models/OmdbApiDto';
import { OmdbService } from './../../services/omdb.service';
import { Component, OnInit } from '@angular/core';
import { Data, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css']
})
export class AddTitleComponent implements OnInit {
  public canSubmit = false;  
  private uid = ""; 
  constructor(public omdb: OmdbService, public movieService: MovieService, private ar: ActivatedRoute, public router: Router) {
    this.movieValue = new OMDBApiDto();

  }

  ngOnInit() {
    this.ar.params.subscribe(params=> {
      this.uid = params['id'];
    });
  }
  public searchTitle = "";
  public movieValue: OMDBApiDto;
  private library: Array<string>; 

  public submit(): void {
    if (this.searchTitle.length > 0) {
      this.omdb.getMovieByTitle(this.searchTitle).then((movieValues: OMDBApiDto) => {
        this.movieValue = movieValues;
        this.canSubmit = true;
      })
    }
  }

  public saveMovie(): void {
    this.movieService.addMovieToCollection(this.movieValue, this.uid).then(e => {
      this.movieValue === null;
    }); 
  }

  public loadLibrary(): void {



    this.movieService.addMovieToCollection(this.movieValue, this.uid);

  }
}
