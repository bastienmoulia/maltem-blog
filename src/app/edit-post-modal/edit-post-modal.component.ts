import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post, PostsService } from 'src/api';

@Component({
  selector: 'mb-edit-post-modal',
  templateUrl: './edit-post-modal.component.html',
  styleUrls: ['./edit-post-modal.component.scss'],
})
export class EditPostModalComponent implements OnInit {
  post: Post;
  new = false;
  constructor(
    public modal: NgbActiveModal,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    if (!this.post) {
      this.new = true;
      this.post = {};
    }
  }

  submit() {
    if (this.new) {
      this.post.date = new Date().toISOString();
      this.postsService.addPost(this.post).subscribe((postAdded) => {
        this.modal.close(postAdded);
      });
    }
  }
}
