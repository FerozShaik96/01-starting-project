import { Component, input } from '@angular/core';
import type { Traffic } from '../../app.model';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  dummyTrafficData = input.required<Traffic[]>();
  maxTraffic = input.required<number>();
}
