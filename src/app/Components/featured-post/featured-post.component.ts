import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/Data/Posts';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.sass'],
})
export class FeaturedPostComponent implements OnInit {
  @Input() img_src: string = '../../../assets/placeholder_post-img.png';
  @Input() img_alt: string = 'Post Image without description.';
  @Input() author: string = 'Anonymous';
  @Input() date: string = 'Today';
  @Input() title: string = 'No title';
  @Input() description: string = 'No description';
  @Input() tags: string[] = [];
  @Input() post: boolean = false;
  @Input() id: string | number | null = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.post)
      this.route.paramMap.subscribe({
        next: (params) => {
          this.id = params.get('id');
          this.setParamsToComponent(this.id);
        },
      });

    this.setParamsToComponent(this.id);
  }

  setParamsToComponent(id: string | number | null): void {
    const result = posts.filter((article) => article.id.toString() == id)[0];

    this.img_src = result.img_src;
    this.img_alt = result.img_alt;
    this.author = result.author;
    this.date = result.date;
    this.title = result.title;
    this.description = result.description;
    this.tags = result.tags;
  }
}
