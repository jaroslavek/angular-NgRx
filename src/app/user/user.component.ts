import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, getUsers, UserDto } from '../user-ngrx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users$: Observable<UserDto[]>;
  users: UserDto[];
  nums = ['jedna', 'dva', 'tri']

  constructor(private store: Store<{ users: UserDto[] }>) {
    this.users$ = store.select('users'); 

    this.users$.subscribe(res => {
        this.users = res;
        console.log('users', this.users)
        console.log('nums', this.nums)
    })
  }
    
  ngOnInit() {}

  addUser() {
    const user = {firstName: 'jardule', lastName: 'hora'} as UserDto;

    this.store.dispatch(addUser({user}));
  }
}
