import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rand-d',
  templateUrl: './rand-d.component.html',
  styleUrls: ['./rand-d.component.css']
})
export class RandDComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  ngOnInit() {
  }

}
