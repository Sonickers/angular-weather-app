import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minimus';
  darkModeActive = false;
  showMenu = false;

  public toggleMenu() {
  }

  public modeToggleSwitch() {

  }
}
