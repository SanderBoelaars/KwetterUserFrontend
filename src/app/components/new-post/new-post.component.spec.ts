import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
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
    this.messageService.postMessage(this.newMessageForm.value.message, 0)
      .subscribe(() => {

      });
  }
}
