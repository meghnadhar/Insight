import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
 selector: 'app-searchbar',
 templateUrl: './searchbar.component.html',
 styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent  {

 constructor(private router:Router){
   
      }
   
      search(value:string):void{
          let link=['/searchresults',value];
          this.router.navigate(link);
         
      }



}