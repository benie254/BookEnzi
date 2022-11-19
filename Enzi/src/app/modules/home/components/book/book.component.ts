import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import * as Notiflix from 'notiflix';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  panelOpenState = false;

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private api:ApiService,
  ) { }

  ngOnInit(): void {
  }
  book(bookingData: any){
    Notiflix.Loading.arrows('Processing... please wait.')
    this.api.bookUnit(bookingData).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Booking Initiated!')
        Notiflix.Report.info(
          'One more thing!',
          'We have placed your request to book a unit with us. We just need one more thing from you. Head over to your email and click the link we have sent you. If the email you provided is valid, it should take only a few seconds.',
          'Sure',
        )
        const form = (<HTMLFormElement>document.getElementById('expansion'));
        form.reset();
        this.recaptchaV3Service.execute('recaptcha').subscribe(
          (token) => {
            console.warn("recaptcha token:",token)
          } 
        );
      },
      error: (err) => {
        Notiflix.Loading.remove();
        Notiflix.Report.failure(
          'Booking Failed!',
          'Something went wrong as we attempted to book a unit for you. Please try again.',
          'Okay',
        )
        console.error(err)
      }
    })
  }
}
