import { Component } from '@angular/core';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  firstName : string = "Bagets";
  angularVersion = "18";
  versionNumber:number = 18;
  isActive: boolean= false;
  currenDate : Date = new Date();
}
