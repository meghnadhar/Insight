import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from'@angular/forms';
import {Text} from '../Text';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id: number;
  text: string;

  constructor(private form: FormService) { }

  saveDetails(Text: string){
    //this.id= ID ;
    this.text=Text;
    this.form.postUser(this.text);
  }

  ngOnInit() {
  }

}
