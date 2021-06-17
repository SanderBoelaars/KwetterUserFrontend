import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Message} from '../../models/Message';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  posts: Message[] = [];

  constructor(private messageService: MessageService, private authService: AuthenticationService) {
    this.getAllPosts();
  }

  ngOnInit(): void {
  }

  getAllPosts(){
    this.messageService.getAllMessages().subscribe((posts) =>{
      this.posts = posts;
      console.log(posts);
    });
  }

  getAllPostsFromUser(){
    this.messageService.getAllMessagesFromUser(this.authService.getUserId()).subscribe((posts) =>{
      this.posts = posts;
      console.log(posts);
    });
  }
}
