import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    alert('Post created !');
    const post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  }

  constructor() {}

  ngOnInit(): void {}
}
