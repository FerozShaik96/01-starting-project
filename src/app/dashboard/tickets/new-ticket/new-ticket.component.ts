import { Component, ElementRef, Input, output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  add=output<{title:string,text:string}>()
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, text: string) {
    this.add.emit({title:title,text:text})
    this.form?.nativeElement.reset();
  }
}
