import { Component, OnInit } from '@angular/core';
import { Tag } from "../tag.model";
import { Post } from "../post.model";
import { Router } from '@angular/router';
import { TagService } from "../tag.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TagService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private tagService: TagService){}

  // posts: Post[];

  tags: Tag[];

  ngOnInit(){
    this.tags = this.tagService.getTags();
    console.log(this.tags);
  }

  goToDetailPage(clickedTag: Tag) {
    this.router.navigate(['tags', clickedTag.id]);
  }

}
