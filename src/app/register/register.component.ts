import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../app.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private users:UserService){}
  user: User = { username: '', password: '' };
  Register(usrname:string,passwords:string){
    console.log(usrname,passwords);
    this.user.username=usrname
    this.user.password=passwords
      //  this.users.registerUser(this.user).subscribe(
      //   response=>{
      //     console.log(response)
      //   },error=>{console.log(error)}
      //  );

       this.users.registerUser(this.user).subscribe();
  }
}
