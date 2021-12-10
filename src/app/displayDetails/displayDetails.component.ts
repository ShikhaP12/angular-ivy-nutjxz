import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './displayDetails.component.html',
})
export class DisplayComponent {
  showSecret = false;
  log = [];

  onLogDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}