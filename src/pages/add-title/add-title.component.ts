import { OMDBApiDto } from './../../models/OmdbApiDto';
import { OmdbService } from './../../services/omdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css']
})
export class AddTitleComponent implements OnInit {

  constructor(public omdb: OmdbService) {
    this.movieValue = new OMDBApiDto();
  }

  ngOnInit() {
  }
  public searchTitle = "";
  public movieValue: OMDBApiDto;


  public submit(): void {
    if (this.searchTitle.length > 0) {
      this.omdb.getMovieByTitle(this.searchTitle).then((movieValues: OMDBApiDto) => {
        this.movieValue = movieValues;
      })
    }
  }


  public saveMovie(): void {
    
  }
}
