import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  lat1: number = 29.961927;
  lng1: number = 31.311328;
  lat2: number = 29.961927;
  lng2: number = 31.311328;
  lat3: number = 29.961927;
  lng3: number = 31.311328;
  lat4: number = 29.961927;
  lng4: number = 31.311328;
  constructor() { }

  ngOnInit() {
  }

}
