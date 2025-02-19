import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  sendEmail(formElement: HTMLFormElement): Promise<any> {
    const btn = formElement.querySelector('button') as HTMLButtonElement;
    btn.value = 'Sending...';

    const serviceID = 'default_service'; // Tu ID de servicio
    const templateID = 'template_79gqush'; // Tu ID de plantilla
    const userID= '6A9Q5yiDwmS9ISKRf';

    return emailjs
      .sendForm(serviceID, templateID, formElement, userID)
      .then(
        (response) => {
          btn.value = 'Send Email';
          alert('Mensaje enviado con éxito');
          return response;
        },
        (error) => {
          btn.value = 'Send Email';
          alert('Error al enviar el mensaje');
          console.error('Error al enviar correo', error);
          throw error;
        }
      );
  }
}
