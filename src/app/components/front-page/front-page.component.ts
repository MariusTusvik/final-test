import { Component } from '@angular/core';
type Tab = 'laboratory' | 'office';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent {
  activeTab: Tab = 'laboratory';
  center!: google.maps.LatLngLiteral;
  zoom = 12;

  locations: Record<Tab, google.maps.LatLngLiteral> = {
    laboratory: { lat: 40.73061, lng: -73.935242 },
    office: { lat: 40.712776, lng: -74.005974 },
  };

  constructor() {
    this.setCenter();
  }

  setActiveTab(tab: Tab): void {
    this.activeTab = tab;
    this.setCenter();
  }

  setCenter(): void {
    this.center = this.locations[this.activeTab];
  }
}
