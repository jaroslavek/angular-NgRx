import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const addUser = createAction('[User] Add', props<{ user: UserDto }>());
export const removeUser = createAction('[User] Remove');
export const reset = createAction('[User] Reset');

export interface UserDto {
  firstName: string;
  lastName: string;
}

export interface UserState {
  users: UserDto[];
  currentUser: UserDto;
}

export const initialState: UserState = {
  users: [],
  currentUser: {} as UserDto,
};

const _userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => {
    const users: UserDto[] = [user, ...state.users];
    console.log('users:', users);
    return { ...state, users: users };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

export const getUserState = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);
