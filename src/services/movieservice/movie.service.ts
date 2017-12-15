import { OMDBApiDto } from './../../models/OmdbApiDto';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class MovieService {
    
  constructor(public db: AngularFirestore) {
   }


  public addMovieToCollection(movie: OMDBApiDto, uid: string) : Promise<void> {
    let adjustedTitle = movie.title.replace(/ /g,"+");
    // let dbUrl = `${uid}/${adjustedTitle}`;
    // let body = JSON.stringify(movie);
    // this.db.doc(dbUrl).set(body).then(e=> {
    //     console.log(`url: ${dbUrl} response: ${e}`);
    // });
    let movieData = this.mapMovieDataToGeneric(movie);
    return this.db.collection(`/movies/byuser/J8roOXe0lvdLZyB7jHTdE9zOoEh1/`).doc(adjustedTitle).set(movieData); 
    
    
    }

    private mapMovieDataToGeneric(movie: OMDBApiDto) : object{

     if(movie)  {
        let data = {
            title: movie.title,
            Year: movie.Year,
            Rated: movie.Rated,
            Released: movie.Released,
            Runtime: movie.Runtime,
            Genre: movie.Genre,
            Director: movie.Director,
            Writer: movie.Writer,
            Actors: movie.Actors,
            Plot: movie.Plot,
            Language: movie.Language,
            Country: movie.Country,
            Poster: movie.Poster,
            Ratings: movie.Ratings,
            Metascore: movie.Metascore,
            imdbVotes: movie.imdbVotes,
            imdbID: movie.imdbID,
            Type: movie.Type,
            DVD: movie.DVD,
            BoxOffice: movie.BoxOffice,
            Production: movie.Production,
            Website: movie.Website,
            Response: movie.Response,
        }
        return data;        
     }
         return {}; 

    }

}
