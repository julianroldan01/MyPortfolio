import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  fullName: string = 'Julian Andrés Roldan Dussan';
  profession: string = 'Desarrollador Full Stack';
  bio: string = 'Soy un apasionado del desarrollo web con experiencia en Angular, Spring Boot y tecnologías modernas, adqueri mis conocimientos en la Fundación Escuela Tecnológica de Neiva y experiencia en Trinity FS.';
  studies = [
    { title: 'Técnico profesional en soporte de sistemas informaticós y redes', institution: 'FET', year: '2020' },
    { title: 'Tecnólogo en análisis y desarrollo de sistemas de información', institution: 'FET', year: '2021' },
    { title: 'Ingeniería de Software', institution: 'FET', year: '2023' },
    { title: 'Desarrollador Full Stack', institution: 'Trinity FS', year: '2022-2024' },
    { title: 'Freelance', institution: 'Wordpress', year: '2025' }
  ];
}
