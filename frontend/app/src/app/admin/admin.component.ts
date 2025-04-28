import { Component } from '@angular/core';
import {News} from '../models/news';
import { NewsService } from '../news.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[NewsService]
})
export class AdminComponent {

  constructor(private servis:NewsService){}
  news:News[]=[]
  ngOnInit():void {
    this.servis.getAllNews().subscribe((data:News[])=>{
      this.news=data;

    })
  }
  
}
