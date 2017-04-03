import { Injectable } from '@angular/core';
import { Tag } from './tag.model';
import { TAGS } from './mock-tag';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class TagService {

  constructor() { }

  getTags() {
    return TAGS;
  }

  getTagById(tagId: number){
    for (var i = 0; i <= TAGS.length - 1; i++) {
      if (TAGS[i].id === tagId) {
        return TAGS[i];
      }
    }
  }

}
