import { Component, Input, OnInit } from '@angular/core';
import { posts } from 'src/app/Data/Posts';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.sass'],
})
export class CardPostComponent implements OnInit {
  @Input() img_src: string = '../../../assets/placeholder_post-img.png';
  @Input() img_alt: string = 'Post Image without description.';
  @Input() author: string = 'Anonymous';
  @Input() date: string = 'Today';
  @Input() title: string = 'No title';
  @Input() description: string = 'No description';
  @Input() tags: string[] = [];
  @Input() id: string | number | null = 0;

  constructor() {}

  ngOnInit(): void {
    this.setParamsToComponent(this.id);
  }

  setParamsToComponent(id: string | number | null) {
    const result = posts.filter((article) => article.id === id)[0];

    this.img_src = result.img_src;
    this.img_alt = result.img_alt;
    this.author = result.author;
    this.date = result.date;
    this.title = result.title;
    this.description = result.description;
    this.tags = result.tags;
  }
}
