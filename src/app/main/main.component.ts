import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post, PostsService } from 'src/api';
import { EditPostModalComponent } from '../edit-post-modal/edit-post-modal.component';

@Component({
  selector: 'mb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postsService: PostsService, private ngbModal: NgbModal) {}

  ngOnInit(): void {
    this.getPosts();
  }

  addPost() {
    this.ngbModal.open(EditPostModalComponent).result.then((post) => {
      this.posts.push(post);
    });
  }

  private getPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
