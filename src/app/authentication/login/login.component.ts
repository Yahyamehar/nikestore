import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
username: any;
login() {
throw new Error('Method not implemented.');
}
  email: string | undefined;
  password: string | undefined;

  constructor() {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
