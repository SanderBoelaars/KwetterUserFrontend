import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Account} from '../models/Account';
import {AddFollowing} from '../models/AddFollowing';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accoutsSubject = new Subject<Account[]>();
  private accounts: Account[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAllAccounts(): Observable<Account[]> {
    this.httpClient.get<Account[]>(environment.api + '/account/get/all')
      .subscribe((response) => {
        this.accounts = response;
        this.accoutsSubject.next(this.accounts);
    })
    return this.accoutsSubject.asObservable();
  }

  addFollowing(userId: number, followingId: number): Observable<boolean>{
    let requestBody: AddFollowing ={
      userId: userId,
      followingId: followingId
    }
    return this.httpClient.post<boolean>(environment.api + '/account/addFollowing', requestBody)
  }
}
