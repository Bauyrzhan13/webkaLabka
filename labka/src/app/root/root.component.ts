import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import {category} from '../categories';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  categories!:Category[];
  constructor() { }

  ngOnInit(): void {
    this.categories=category;
  }

}
