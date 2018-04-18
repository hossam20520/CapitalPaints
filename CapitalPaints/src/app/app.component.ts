import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toAr:boolean=false;
  toEn:boolean=true;
  constructor(private translate:TranslateService) {
    translate.setDefaultLang('en');
   }

   switchLanguageAr(language:string){
    this.translate.use(language);
    this.toggleBtnAr();
  }
  toggleBtnAr(){
    this.toAr=true;
    this.toEn=false;
  }
  toggleBtnEn(){
    this.toAr=false;
    this.toEn=true;
  }
  switchLanguageEn(language:string){
    this.translate.use(language);
    this.toggleBtnEn();
  }
}
