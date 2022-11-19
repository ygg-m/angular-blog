import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/Data/Posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  // img_src: string = '';
  // img_alt: string = '';
  // author: string = '';
  // date: string = '';
  // title: string = '';
  // description: string = '';
  // tags: string[] = [];
  @Input() content: string = '';
  @Input() id: string | number | null = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        this.setParamsToComponent(this.id);
      },
    });
  }

  setParamsToComponent(id: string | number | null) {
    const result = posts.filter((article) => article.id.toString() === id)[0];

    // this.img_src = result.img_src;
    // this.img_alt = result.img_alt;
    // this.author = result.author;
    // this.date = result.date;
    // this.title = result.title;
    // this.description = result.description;
    // this.tags = result.tags;

    this.content = result.content.join('');
  }
}
