import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Peritos Pritec',
      description:
        'Sistema de Peritajes Vehiculares para Autos y Motos realizado con Wordpress.',
      image: 'assets/img/Captura.PNG',
      link: 'https://peritospritec.co',
    },
    {
      title: 'Tambo Travel',
      description:
        'Plataforma de Turismo para planificar viajes en Colombia realizado con Wordpress.',
      image: 'assets/img/Captura2.PNG',
      link: 'https://tambotravel.co',
    },
    {
      title: 'South Park',
      description:
        'Pagina fandom de SouthPark hecho con React y SpringBoot',
      image: 'assets/img/Captura3.PNG',
      link: 'https://github.com/julianroldan01/SouthParkFront',
      additionalLink: 'https://github.com/julianroldan01/SouthParkBackend'
    },
    {
      title: 'cocktail deck',
      description:
        'Pagina de cocteleria realizado con Laravel y Auth UI',
      image: 'assets/img/Captura4.PNG',
      link: 'https://github.com/julianroldan01/cocktailsLaravel'
    },
  ];
}
