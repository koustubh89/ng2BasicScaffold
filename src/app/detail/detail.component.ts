import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HackerNewsService } from '../shared/hacker-news.service';
import { Post } from '../shared/post.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hn-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [HackerNewsService]
})
export class AppDetailComponent implements OnInit {

  private sub: any;
  posts: Post[];
  post: Post;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private _hackerNewsService: HackerNewsService,
  ) {
    console.log('reaching app details component');
    this.getPosts();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log('onInit => this.id', this.id);
      });
    }

    getPosts() {
      this._hackerNewsService
      .getFeed('news')
      .subscribe(posts => {
        this.posts = posts;
        this.mapPosts();
      });
    }

    mapPosts() {
      for (let count = 0; count < this.posts.length; count++) {
        if (this.posts[count].id === this.id) {
          this.post = this.posts[count];
      }
    }

    console.log('this post', this.post);
  }
}
