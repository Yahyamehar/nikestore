import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
CommonModule;

@Component({
  selector: 'app-shop6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop6.component.html',
  styleUrl: './shop6.component.css',
})
export class Shop6Component implements OnInit {
  shoes = [
    {
      name: 'FILA Shoe ',
      title: 'Get Your Size',
      imageUrl: 'assets/fila3.jpg',
    },
    {
      name: 'FILA Shoe ',
      title: 'Get Your Size',
      imageUrl: 'assets/fila1.jpg',
    },
    {
      name: 'FILA Center',
      title: 'Get Your Size',
      imageUrl: 'assets/fila2.jpg',
    },
    {
      name: 'FILA Shoes',
      title: 'Get Your Size',
      imageUrl: 'assets/fila3.jpg',
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
