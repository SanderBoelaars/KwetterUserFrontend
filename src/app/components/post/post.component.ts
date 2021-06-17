import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/Message';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
