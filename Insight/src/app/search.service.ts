import { QueryDetails } from './querydetails';

import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService{
 constructor(private http:Http){

     console.log('Search Service Constructor');
 }
 private searchUrl = "http://localhost:7474/db/data/cypher";
 

 private headers = new Headers({'Content-Type': 'application/json'});

 search(term:string):Observable<QueryDetails> {
   
   var headers = new Headers();
   headers.append('Content-Type', 'application/json; charset=utf-8');
   headers.append('Authorization','Basic bmVvNGo6cGFzc3dvcmQ=')
   
   return this.http.post(this.searchUrl, JSON.stringify({query:"match(p:Person{name:'"+term+"'})-[r]-(b) return p,r,b"}),{ headers:headers }).map(response=>response.json()as QueryDetails);
 } 

  

 
}