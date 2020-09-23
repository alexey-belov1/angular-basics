import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];
  obj = {a: 1, b: {c: 2} };
  img = 'https://lh3.googleusercontent.com/HDhEYpJwOs5zFq1ckigVoKn0NYZxdLz3NzyIMt94jDlfgbbvLkYjHdBTC6CJO_dH82oc';

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://icon-library.com/images/react-icon/react-icon-14.jpg';
    }, 5000);
  }
}
