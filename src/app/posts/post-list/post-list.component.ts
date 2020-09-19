import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {
  //     title: 'First Post',
  //     content: 'Lorfsraggdfgdgdfdem Ipsum I want to eat pizaz bitch !',
  //   },
  //   {
  //     title: 'Second Post',
  //     content: 'Lorem Ipsum I fdgdghggfhgf to eat pizaz bitch !',
  //   },
  //   {
  //     title: 'Third Post',
  //     content: 'Lorem gfhfdhjhjgfjhfkjghfkgj I want to eat pizaz bitch !',
  //   },
  // ];
  @Input() posts = [];

  constructor() {}

  ngOnInit(): void {}
}
