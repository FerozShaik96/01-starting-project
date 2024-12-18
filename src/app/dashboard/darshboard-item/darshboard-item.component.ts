import { Component, input } from '@angular/core';

@Component({
  selector: 'app-darshboard-item',
  standalone: true,
  imports: [],
  templateUrl: './darshboard-item.component.html',
  styleUrl: './darshboard-item.component.css',
})
export class DarshboardItemComponent {
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
