import { Component } from '@angular/core';

// Third Party
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  standalone: false,
  
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  home = faBorderAll;
}
