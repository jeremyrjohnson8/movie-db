import { OMDBApiDto } from './../models/OmdbApiDto';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { IOMDBApi } from '../interfaces/OMDBApi';

@Injectable()
export class OmdbService {
  private url = `http://www.omdbapi.com/?i=tt3896198&apikey=f92f483e&t=`
 
  constructor(public http: Http) {
   }
  private omdbDto: OMDBApiDto; 
  private iomdbApi: IOMDBApi;

  public getMovieByTitle(title: string) : Promise<OMDBApiDto> {

    let titleUrl = this.url+`${title}`
    let titleUrlFinal = titleUrl.replace(/ /g,"+");
    console.log(`URL ${titleUrlFinal}`);
    return new Promise((resolve) => {
      if (title) {
        this.http.get(titleUrlFinal).subscribe((value: Response) => {
          this.iomdbApi = value.json() as IOMDBApi; 
          this.omdbDto = new OMDBApiDto(this.iomdbApi);
          console.log(value.json());
          return resolve(this.omdbDto);
        }),
         (error: Error) => {
           this.omdbDto.errorOccurred = true; 
           this.omdbDto.errorMessage = error.message; 
          return resolve(this.omdbDto); 
        }
      }
    })
    }

}
