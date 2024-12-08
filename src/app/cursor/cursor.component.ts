import { Component, ElementRef, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
  standalone: false
})
export class CursorComponent implements OnInit, OnDestroy {
  private borderElement: HTMLElement | null = null;
  private dotElement: HTMLElement | null = null;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Ensure DOM access in the browser
      this.borderElement = document.querySelector('.cursor-border') as HTMLElement;
      this.dotElement = document.querySelector('.cursor-dot') as HTMLElement;

      // Check if the borderElement and dotElement are found
      console.log('Border Element:', this.borderElement);
      console.log('Dot Element:', this.dotElement);

      this.hoverDetect();
    }
  }

  ngOnDestroy(): void {
    // Clean up listeners if needed (optional)
  }

  hoverDetect(){
      // Dynamically add mouseenter event to hover elements
      const hoverElements = this.el.nativeElement.querySelectorAll('.hover-element');
      hoverElements.forEach((element: HTMLElement) => {
        this.renderer.listen(element, 'mouseenter', () => {
          console.log('Mouse entered an element:', element);
          this.onMouseEnter();
        });
        this.renderer.listen(element, 'mouseleave', () => {
          console.log('Mouse left an element:', element);
          this.onMouseLeave();
        });
      });
  }

  private onMouseEnter(): void {
    if (this.borderElement && this.dotElement) {
      console.log('Adding hovered class');
      this.borderElement.classList.add('hovered');
      this.dotElement.classList.add('hovered');
    }
  }

  private onMouseLeave(): void {
    if (this.borderElement && this.dotElement) {
      console.log('Removing hovered class');
      this.borderElement.classList.remove('hovered');
      this.dotElement.classList.remove('hovered');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.borderElement && this.dotElement) {
      const { clientX, clientY } = event;

      // Move dot immediately
      this.dotElement.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;

      // Move border with delay
      this.borderElement.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
    }
  }
}
