import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  protected readonly messageService = inject(MessageService);
}
