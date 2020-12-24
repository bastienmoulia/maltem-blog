import { Component, OnInit } from '@angular/core';
import { Post } from 'src/api';

@Component({
  selector: 'mb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post;
  constructor() {}

  ngOnInit(): void {}
}
