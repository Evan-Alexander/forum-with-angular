import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from "../post.model";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  @Output() newPostSender = new EventEmitter();

  submitForm(title: string, body: string) {
    if(!title || !body) {
      alert("Please complete the form and resubmit.");
    }
    else {
      var newPostToAdd: Post = new Post(title, body);
      // this.newPostSender.emit(newPostToAdd);
      console.log(newPostToAdd);
    }
  }
}
