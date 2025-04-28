import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService]
})
export class LoginComponent {
  constructor(private userService:UserService,private router:Router){}
  username:string;
  password:string;
  login(){
    this.userService.login(this.username,this.password).subscribe((user:User)=>{
      if(user) {
        if (user.type==0){
          console.log("yo");
          this.router.navigate(['/user']);
        }
        else{
          this.router.navigate(['/admin']);
        }
      }
      else alert('bad')
    });
  }
}
