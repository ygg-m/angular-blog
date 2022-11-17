import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/Data/Posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  img_src: string = '';
  img_alt: string = '';
  author: string = '';
  date: string = '';
  title: string = '';
  description: string = '';
  content: string = '';
  id: number | null = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
  }
}
