import { Component, ViewEncapsulation } from '@angular/core';
type Tab = 'laboratory' | 'office';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FrontPageComponent {
  constructor() {
    this.setCenter();
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  /* ------------------------------------- Location Section ------------------------------------- */

  moscowTime!: string;
  moscowTimeZone = 'Europe/Moscow';

  updateTime() {
    const now = new Date();
    this.moscowTime = new Intl.DateTimeFormat('en-US', {
      timeZone: this.moscowTimeZone,
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(now);
  }

  /* ------------------------------------- Contact Section ------------------------------------- */

  activeTab: Tab = 'laboratory';
  center!: google.maps.LatLngLiteral;
  zoom = 12;

  locations: Record<Tab, google.maps.LatLngLiteral> = {
    laboratory: { lat: 40.73061, lng: -73.935242 },
    office: { lat: 40.712776, lng: -74.005974 },
  };
  
  setActiveTab(tab: Tab): void {
    this.activeTab = tab;
    this.setCenter();
  }

  setCenter(): void {
    this.center = this.locations[this.activeTab];
  }
}
