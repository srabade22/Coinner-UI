import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // items = [
  //   { image: 'https://via.placeholder.com/600x300', alt: 'Image 1', caption: 'Slide 1' },
  //   { image: 'https://via.placeholder.com/600x300', alt: 'Image 2', caption: 'Slide 2' },
  //   { image: 'https://via.placeholder.com/600x300', alt: 'Image 3', caption: 'Slide 3' },
  // ];

  // currentIndex = 0;
  // interval: any;
  // startX = 0;
  // endX = 0;

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // ngOnDestroy(): void {
  //   this.stopAutoSlide();
  // }

  // get currentOffset(): number {
  //   return -this.currentIndex * 600; // Adjust width as per your item width
  // }

  // // For previous slider
  // prevSlide(): void {
  //   if (this.currentIndex === 0) {
  //     this.currentIndex = this.items.length - 1; // Go to the last slide
  //   } else {
  //     this.currentIndex--;
  //   }
  // }

  // // For nrxt slider
  // nextSlide(): void {
  //   if (this.currentIndex === this.items.length - 1) {
  //     this.currentIndex = 0; // Go to the first slide
  //   } else {
  //     this.currentIndex++;
  //   }
  // }

  // // Sliders for touch events
  // onTouchStart(event: TouchEvent): void {
  //   this.startX = event.touches[0].clientX;
  // }

  // onTouchMove(event: TouchEvent): void {
  //   this.endX = event.touches[0].clientX;
  // }

  // onTouchEnd(): void {
  //   const deltaX = this.endX - this.startX;

  //   if (deltaX > 50) {
  //     // Swipe right
  //     this.prevSlide();
  //   } else if (deltaX < -50) {
  //     // Swipe left
  //     this.nextSlide();
  //   }

  //   // Reset touch positions
  //   this.startX = 0;
  //   this.endX = 0;
  // }

  // // Auto slides
  // startAutoSlide(): void {
  //   this.interval = setInterval(() => {
  //     this.nextSlide();
  //   }, 3000); // Slide every 3 seconds
  // }

  // stopAutoSlide(): void {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }
}
