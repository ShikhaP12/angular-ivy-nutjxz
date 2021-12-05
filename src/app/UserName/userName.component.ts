import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './userName.component.html',
})
export class UserNameComponent {
  username = '';

  onReset() {
    this.username = '';
  }
}
