import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>()
  isMarkedID=output()
  // detailsVisible=false;
  detailsVisible=signal(false)

  onToggle(){
    // this.detailsVisible=!this.detailsVisible
    // this.detailsVisible.set(!this.detailsVisible())
    this.detailsVisible.update((isitVisible)=>!isitVisible)
  }
  onMarkComplete(){
    this.isMarkedID.emit()
  }
}
