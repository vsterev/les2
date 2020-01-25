import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectTest App Vasko';
  visible = false;
  isSpecial = false;
  canSave = false;
  users = [
    { name: 'Vasko', age: 45 },
    { name: 'Eli', age: 45 },
    { name: 'Velizar', age: 17 }
  ];
  link = 'https://contenthub-static.grammarly.com/assets/img/20af92479c42f30da5c422c6505c09c9/facebook.svg';

  toggleVisible(event: MouseEvent) {
    console.log(event);
    this.visible = !this.visible;
  }
  titleChange(val: string) {
    // console.log(event.target.previousElementSibling.value);
    // this.title = event.target.previousElementSibling.value;
    this.title = val;
  }
  deleteUser(user: object) {
    this.users = this.users.filter(c => c !== user);
  }
}
