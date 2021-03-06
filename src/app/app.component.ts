import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы', id: 2}
  ];

  updatePosts(post: Post): void {
    this.posts.unshift(post);
    // console.log('Post: ', post);
  }

  removePost(id: number): void {
    console.log('Id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
