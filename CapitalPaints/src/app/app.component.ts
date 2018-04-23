import { Component, OnInit, HostListener } from '@angular/core';
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
  mobile:boolean;
  innerWidth:any;
  auto="Automotive";
  constructor(private translate:TranslateService) {
    translate.setDefaultLang('en');
   }

   @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      console.log(this.innerWidth);
      if(this.innerWidth<=767){
        this.mobile = true;
      }
      else{
        this.mobile=false;

      } 
    }
   ngOnInit(){
    
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      var width = $(window).width();
      console.log(width);
      if (scroll==0){
        $('#nav-style').removeClass('navbar-default');
        $('#nav-style').addClass('navStyle');
        $('#logo-nav').removeClass('logo-img');
        $('#logo-nav').addClass('logoStyle');
        $('.navLink').removeClass('nav-link');
        $('.navLink').addClass('navlinkStyle');
        $('#nav-btn').removeClass('navbar-toggle');
        $('#nav-btn').addClass('navBtnStyle');
        $('#nav-header').addClass('navbar-header');
        $('.flag').removeClass('flag-img');
        $('.flag').addClass('flagStyle');
      }
      
      if(scroll>3){
        $('#nav-style').removeClass('navStyle');
        $('#nav-style').addClass('navbar-default');
        $('#logo-nav').removeClass('logoStyle');
        $('#logo-nav').addClass('logo-img');
        $('.navLink').removeClass('navlinkStyle');
        $('.navLink').addClass('nav-link');
        $('#nav-btn').removeClass('navBtnStyle');
        $('#nav-btn').addClass('navbar-toggle');
        $('#nav-header').removeClass('navbar-header');
        $('.flag').removeClass('flagStyle');
        $('.flag').addClass('flag-img');
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
    $('#un-list').css({"text-align": "right", "direction":"rtl"})
  }
  toggleBtnEn(){
    this.toAr=false;
    this.toEn=true;
    $('#un-list').css({"text-align": "left"})
  }
  switchLanguageEn(language:string){
    this.translate.use(language);
    this.toggleBtnEn();
  }
 


}
