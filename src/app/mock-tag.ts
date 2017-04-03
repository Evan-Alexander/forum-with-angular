import { Tag } from "./tag.model";
import { Post } from "./post.model";
import { POSTS } from "./mock-posts"

export const TAGS: Tag[] = [
  new Tag(1, "title", "description", POSTS),
  new Tag(2, "title2", "description2", POSTS),
  new Tag(3, "title3", "description3", POSTS)
];
