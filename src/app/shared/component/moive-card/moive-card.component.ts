import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';

@Component({
  selector: 'app-moive-card',
  templateUrl: './moive-card.component.html',
  styleUrls: ['./moive-card.component.scss']
})
export class MoiveCardComponent implements OnInit {

  Img_path = "https://image.tmdb.org/t/p/w1280";


@Input() 
moiveInfo :Imovie[] = [] 

  constructor() { }

  ngOnInit(): void {
  }

}
