import {
  Component,
  DestroyRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  @Input({ required: true }) currentStatus!: string;
  private interval?: ReturnType<typeof setInterval>;
  private DestroyRef = inject(DestroyRef);
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  constructor() {}
  ngOnInit() {
    const interval = setInterval(() => {
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
    this.DestroyRef.onDestroy(() => clearInterval(interval));
  }
  // you can use any way but if you are using Angular's version above 17 you can use DestroyRef.
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
