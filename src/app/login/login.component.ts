import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user!: User[];
  currentUser?: User;
  constructor(private service: UserService,private router: Router){

  }
  Login(username: string, password: string){
    this.service.getUser(username).subscribe(user => {
      this.user = user;
      this.currentUser=this.user.find(user => user.username === username && user.password === password);
      if (this.currentUser?.username === username && this.currentUser?.password === password) {
        this.router.navigateByUrl('/');
        localStorage.setItem('isValid', "true");
      } else {
        localStorage.setItem('isValid', "false");
        console.log('Invalid username or password');
      }
    });
  }
}
