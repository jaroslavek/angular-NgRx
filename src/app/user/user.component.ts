import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, selectUsers, UserDto } from '../user-ngrx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users$: Observable<UserDto[]>;
  users: UserDto[] | undefined;
  nums = ['jedna', 'dva', 'tri']

  constructor(private store: Store) {
    this.users$ = store.select(selectUsers);

    this.users$.subscribe(res => {
        this.users = res;
        console.log('users x1', this.users)
        console.log('nums', this.nums)
    })
  }

  ngOnInit() {}

  addUser() {
    const user = {firstName: 'jardule', lastName: 'hora'} as UserDto;

    this.store.dispatch(addUser({user}));
  }
}
