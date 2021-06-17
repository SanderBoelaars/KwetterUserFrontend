import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newMessageForm = new FormGroup({
    message: new FormControl(undefined),
  });

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  postMessage() {

    this.messageService.postMessage(this.newMessageForm.value.message)
      .subscribe(() => {
      });
  }
}
