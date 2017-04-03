import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Tag } from "../tag.model";
import { Post } from "../post.model";
import { TagService } from "../tag.service";

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css'],
  providers: [TagService]
})
export class TagDetailComponent implements OnInit {
  tagId: number;
  tagToDisplay: Tag;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.tagId = parseInt(urlParameters['id']);
    });
    this.tagToDisplay = this.tagService.getTagById(this.tagId);
  }

}
