import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverID: number = 20;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  allowNewServer = false;

  constructor(){
    setTimeout(()=> {
      this.allowNewServer=true;
    },2000);
  }
}
