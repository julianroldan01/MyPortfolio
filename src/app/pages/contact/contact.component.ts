import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmailService } from '../contact/email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class ContactComponent {
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  constructor(private emailService: EmailService) {}

  sendMessage(form: HTMLFormElement) {
    this.emailService.sendEmail(form).then(
      (response) => {
        // Aquí puedes manejar algo más si es necesario
      },
      (error) => {
        // Manejar error si es necesario
      }
    );
  }
}
