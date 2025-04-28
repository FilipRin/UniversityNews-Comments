import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  http=inject(HttpClient)

  uri='http://localhost:4000'

  getAllNews(){
    return this.http.get(`${this.uri}/news/getAllNews`)
  }

  addComment(id,comment){
    const data={
      id:id,
      comment:comment
    }
    this.http.post(`${this.uri}/news/addComment`,data)
  }

}
