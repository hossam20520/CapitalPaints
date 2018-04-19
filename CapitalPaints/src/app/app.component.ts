import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  toAr:boolean=false;
  toEn:boolean=true;
  
  constructor(private translate:TranslateService) {
    translate.setDefaultLang('en');
   }

   ngOnInit(){
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      
      if (scroll==0){
        $('#nav-style').removeClass('navbar-default');
        $('#nav-style').addClass('navStyle');
        $('#logo-nav').removeClass('logo-img');
        $('#logo-nav').addClass('logoStyle');
        $('.navLink').removeClass('nav-link');
        $('.navLink').addClass('navlinkStyle');
        
      }
      if(scroll>3){
        $('#nav-style').removeClass('navStyle');
        $('#nav-style').addClass('navbar-default');
        $('#logo-nav').removeClass('logoStyle');
        $('#logo-nav').addClass('logo-img');
        $('.navLink').removeClass('navlinkStyle');
        $('.navLink').addClass('nav-link');
      }
  });
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
