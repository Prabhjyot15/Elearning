import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  selectedUser: User = {
    fullName: '',
    userName: '',
    email: '',
    password: ''
  };
}
