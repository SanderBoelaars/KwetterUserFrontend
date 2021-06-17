import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Message} from '../models/Message';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messagesSubject = new Subject<Message[]>();
  private messages: Message[] = [];

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  getAllMessagesFromUser(userId: number): Observable<Message[]> {
    this.httpClient.get<Message[]>(environment.api + '/post/get/user/' + userId)
      .subscribe((response) =>{
      this.messages =response;
      this.messagesSubject.next(this.messages);
    })
    return this.messagesSubject.asObservable();
  }

  getAllMessages(): Observable<Message[]> {
    this.httpClient.get<Message[]>(environment.api + '/post/get/all')
      .subscribe((response) =>{
        this.messages =response;
        this.messagesSubject.next(this.messages);
      })
    return this.messagesSubject.asObservable();
  }


  postMessage(message: string): Observable<Message> {
    let requestBody: Message = {
      id: 0,
      content: message,
      userId: this.authService.getUserId(),
    }
    return this.httpClient.post<Message>(environment.api + '/post/createPost', requestBody);
  }
}
