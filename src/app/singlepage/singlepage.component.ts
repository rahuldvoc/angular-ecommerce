import {
  AfterViewInit,
  Component,
  OnDestroy
} from '@angular/core';

declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {

    // WOW animation
    new WOW().init();

    // Owl carousel init
    $('.single-carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      dotsData: true,
      nav: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 600
    });
    $('.related-carousel').owlCarousel({
      loop: true,
      margin: 24,
      nav: true,
      dots: false,

      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 600,

      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 }
      }
    });
  }

  ngOnDestroy(): void {
    $('.single-carousel').trigger('destroy.owl.carousel');
    $('.related-carousel').trigger('destroy.owl.carousel');
  }

}
