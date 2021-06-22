import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class')
  cssClass = 'row';

  title: string;
  link: string;
  votes: number;

  constructor() {
    this.title = 'Angular';
    this.link = 'https://angular.io';
    this.votes = 10;
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.votes++;
    return false;
  }

  voteDown(): boolean {
    this.votes--;
    return false;
  }

}
