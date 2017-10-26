import { QueryDetails } from './../querydetails';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';




@Component({
 selector: 'app-searchresults',
 templateUrl: './searchresults.component.html',
 styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

 private result:any;
 
 constructor(
   private searchService: SearchService,
   private route: ActivatedRoute,){
 
}


ngOnInit() {
   this.route.paramMap
   .switchMap((param: ParamMap) => this.searchService.search(param.get('value')))
   .subscribe( result => this.result = result);
 }       

 

}