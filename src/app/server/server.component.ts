import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverID: number = 20;
  serverStatus: string = 'offline';
  serverCreationStatus = 'No server was created';
  allowNewServer = false;
  serverName1 = '';
  serverName2 = '';
  serverCreated = false;

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server is created!!! Name is ' + this.serverName1;
  }

  onUpdateServerName1(event: Event) {
    this.serverName1 = (<HTMLInputElement>event.target).value;
  }
}
