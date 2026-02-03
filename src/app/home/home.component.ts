import { Component, AfterViewInit,ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: any;
  ngAfterViewInit(): void {
    setTimeout(() => {
      $('.header-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        smartSpeed: 2000,
      });

      $('.productList-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      });

      $('.productImg-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        items: 1,
      });
    }, 0);
  }
}
