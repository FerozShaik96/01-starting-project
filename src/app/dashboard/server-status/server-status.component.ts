import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  @Input({ required: true }) currentStatus!: string;

  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  constructor() {}
  ngOnInit() {
    setInterval(() => {
      const res = Math.random();
      console.log(res, this.currentStatus);
      if (res < 0.5) {
        this.currentStatus = 'online';
      } else if (res < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 3000);
  }
}
