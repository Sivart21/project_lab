import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FRINEDS } from '../mock-friends';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.less']
})
export class FriendsComponent implements OnInit {

  friends = FRINEDS;
  selectedGame?: Friend;

  search: string = ''

  condition: boolean = true;

  changeCondition(currentSearch: string) {
    if (currentSearch === '') {
      this.condition = true;
    }
    this.condition = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addFriend(selectedFriend: Friend): void {
    selectedFriend.friendStatus = true;
  }

  removeFriend(selectedFriend: Friend): void {
    selectedFriend.friendStatus = false;
  }


}
