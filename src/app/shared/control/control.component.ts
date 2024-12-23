import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  input,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onclick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  @ContentChild('input') private control?:ElementRef<HTMLInputElement |HTMLTextAreaElement>
  // @HostListener('click') onClick() {
  //   console.log('Hello Clicked');
  // }
  onclick() {
      console.log('Hello Clicked');
      console.log(this.control)
    }
}
