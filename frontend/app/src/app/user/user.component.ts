import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../models/news';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [NewsService]
})
export class UserComponent {

  constructor(private servis:NewsService){}

  ngOnInit():void{
    this.servis.getAllNews().subscribe((data:News[])=>{
      this.news=data;
    })
  }

  news:News[]=[]

  id:number;
  comment:string;

  add(){
    this.servis.addComment(this.id,this.comment);
  }

}
