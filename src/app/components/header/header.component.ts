import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  fullName: string = 'Julian Andrés Roldan Dussan';
  logoUrl: string = 'https://avatars.githubusercontent.com/u/53824865?s=400&u=130af25beed23adb11289d42c4b9927bfadead97&v=4';
  menuOpen = false;

  toggleMobileMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
