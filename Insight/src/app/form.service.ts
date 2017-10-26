import { Text} from './Text';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class FormService {
   constructor(private http: Http) {

   }

   private url: string = 'http://localhost:5000/api/textarea';


   text: Text;

   postUser(Texts: string) {
       this.text = new Text(Texts);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });

       this.http.post(this.url, this.text, options).map(response => response.json())
           .subscribe(() => { console.log('Success') }
           );
   }
}