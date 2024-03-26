import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  private counter = 0;
  private carouselItems!: HTMLElement[];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.carouselItems = Array.from(this.el.nativeElement.querySelectorAll('.carousel-item'));
    
    // Initialize the carousel with the first image as active
    this.showSlide(0);
  }

  prevSlide() {
    this.showSlide(this.counter - 1);
  }

  nextSlide() {
    this.showSlide(this.counter + 1);
  }

  private showSlide(index: number) {
    if (index < 0) {
      index = this.carouselItems.length - 1;
    } else if (index >= this.carouselItems.length) {
      index = 0;
    }

    this.counter = index;

    this.carouselItems.forEach((item, i) => {
      if (i === index) {
        this.renderer.addClass(item, 'active');
      } else {
        this.renderer.removeClass(item, 'active');
      }
    });
  }
}
