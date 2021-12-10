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
  servers = ['TestServer', 'Production Server'];

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName1);
    this.serverCreationStatus =
      'Server is created!!! Name is ' + this.serverName1;
  }

  onUpdateServerName1(event: Event) {
    this.serverName1 = (<HTMLInputElement>event.target).value;
  }
}
