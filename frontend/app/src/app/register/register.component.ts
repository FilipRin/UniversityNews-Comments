import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService]
})
export class RegisterComponent {

  constructor(private servis:UserService){}

  servis2=inject(UserService);
  firstname:string;
  lastname:string;
  username:string;
  password:string;
  type:number;

  register(){
    this.servis2.registerUser(this.firstname,this.lastname,this.username,this.password,this.type).subscribe((resp)=>{
      if(resp['message']=='user added'){
        alert("OK")
      }else{
        alert("ERROR")
      }
    })
  }

}
