import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input() title: string = '';
  @Input() menuItems: string[] = [];

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log('toggleMenu');
  }

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(targetElement: HTMLElement): void {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
