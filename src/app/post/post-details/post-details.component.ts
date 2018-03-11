import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { PostService } from '../post.service'
import { Post } from '../post.model'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.getPost()
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.getPostData(id).subscribe(post => (this.post = post))
  }
}
