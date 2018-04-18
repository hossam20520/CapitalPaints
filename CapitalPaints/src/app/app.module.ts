import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CollapseModule,
   
    CarouselModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
  RouterModule.forRoot([
    {path:'homepage', component:HomePageComponent},
    {path:"",redirectTo:'homepage',pathMatch:'full'}
    
  ])
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
