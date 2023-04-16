import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchHits = [
    { title: 'Introduction to BAUM AI' },
    { title: 'Using BAUM AI for Customer Support' },
    { title: "BAUM AI's Privacy Policy" },
    { title: "BAUM AI's Pricing Plans" },
    { title: "BAUM AI's Blog" },
    { title: "BAUM AI's Contact Us" },
    { title: 'Using BAUM AI for Marketing' },
  ];
  }

