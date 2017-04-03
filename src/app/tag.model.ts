import { Post } from './post.model';

export class Tag {
  constructor(public id: number, public title: string, public description: string, public posts: any) {}
}
