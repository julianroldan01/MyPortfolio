import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fullName: string = 'Julian Andrés Roldan Dussan';
  profession: string = 'Desarrollador Web | Junior';
  bio: string = 'Soy un desarrollador web apasionado por la creación de soluciones digitales eficientes. Me especializo en el diseño y desarrollo de páginas web responsivas y funcionales, optimizando su rendimiento y usabilidad.';

   technologies = [
    { name: 'WordPress', icon: 'fab fa-wordpress' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'SQL Server', icon: 'fas fa-server' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'Postman', icon: 'fab fa-postman' },
    { name: 'React', icon: 'fab fa-react' }
  ];

  languages = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'TypeScript', icon: 'fab fa-ts' },
    { name: 'CSS', icon: 'fab fa-css' },
    { name: 'HTML', icon: 'fab fa-html' }
  ];
}
