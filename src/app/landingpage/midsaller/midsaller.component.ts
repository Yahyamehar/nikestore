import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midsaller',
  standalone: true,
  imports: [],
  templateUrl: './midsaller.component.html',
  styleUrl: './midsaller.component.css'
})

export class MidSaleBannerComponent implements OnInit {
  daysRemaining: number = 0;
  hoursRemaining: number = 0;
  minutesRemaining: number = 0;
  secondsRemaining: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Set the date for the countdown (30 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);

    // Update the countdown every 1 second
    setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();
      // Calculate the remaining time
      const distance = countDownDate.getTime() - now;
      // Calculate days, hours, minutes, and seconds
      this.daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }
}
