import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.sass'],
})
export class FeaturedPostComponent implements OnInit {
  constructor() {}

  @Input() img_src: string = '../../../assets/placeholder_post-img.png';
  @Input() img_alt: string = 'Post Image without description.';
  @Input() author: string = 'Anonymous';
  @Input() date: string = 'Today';
  @Input() title: string = 'No title';
  @Input() description: string = 'No description';
  @Input() tags: string[] = [];

  ngOnInit(): void {}
}
