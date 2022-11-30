import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.less']
})
export class BookingConfirmedComponent implements OnInit {

  constructor(
    private router:Router,
  ) {
    
   }

  ngOnInit(): void {
    this.confirmation();
  }
  confirmation(){
    Notiflix.Confirm.show(
      'Booking Confirmed',
      "You have successfully confirmed your booking!",
      "What next?",
      "Take me back",
      () => {
        Notiflix.Report.info(
          "What Next...",
          "One of our representatives will reach out to you as soon as possible. In the meantime, you can look around some more.",
          "Great",
        )
        this.router.navigate([''])
      },
      () => {
        Notiflix.Report.success(
          "Good bye!",
          "Sad to see you leave. We hope you will visit us again soon.",
          'Maybe',
        )
        history.back();
      }
    )
  }

}
