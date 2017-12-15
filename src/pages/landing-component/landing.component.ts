import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  private uid: string; 
  constructor(private _router: Router, private ar: ActivatedRoute) { 
   ar.params.subscribe(params => {
      this.uid = params['id'];
   })
  }

  ngOnInit() {
  }

  private tryRoute(route:string){
    this._router.navigate([route , this.uid]); 
}

}
