import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TicketsComponent,
    ServerStatusComponent,
    TrafficComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  currentStatus = 'online';
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

  get serverStatus() {
    return this.currentStatus;
  }
  get trafficDummyData() {
    return this.dummyTrafficData;
  }
  get maxTrafficValue() {
    return this.maxTraffic;
  }
}
