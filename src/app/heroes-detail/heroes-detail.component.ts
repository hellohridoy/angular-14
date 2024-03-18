import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() hero?: Hero;
  goBack() {}
}
