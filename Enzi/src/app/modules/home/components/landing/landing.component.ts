import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  panelOpenState = false;
  mpesaRes: any;

  constructor(
    private service:ApiService
  ) { }

  ngOnInit(): void {
  }

  testMpesa(){
    Notiflix.Loading.dots('Sending request...');
    this.service.testMpesa().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Worked!')
        this.mpesaRes = res;
        console.warn("mp",res)
      }, 
      error: (err) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Something went wrong!');
        console.warn(err)
      }
    })
  }

}
