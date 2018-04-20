import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 29.961927;
  lng: number = 31.311328;
  constructor(private translate:TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
  }

  switchLanguage(language:string){
    this.translate.use(language);
  }
  

}
