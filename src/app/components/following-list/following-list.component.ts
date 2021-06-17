import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Account} from '../../models/Account';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.scss']
})
export class FollowingListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService, private authService: AuthenticationService) {
    this.getAllAccounts();
  }

  ngOnInit(): void {
  }

  getAllAccounts(){
    this.accountService.getAllAccounts().subscribe((response) => {
      this.accounts = response;
    })
  }

  addFollowing(followingId: number){
    this.accountService.addFollowing(this.authService.getUserId(), followingId)
      .subscribe((response) =>{

    });
  }
}
