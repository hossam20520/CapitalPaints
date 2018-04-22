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
import { ProductsComponent } from './components/products/products.component';
import { TooltipModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CollapseModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCfTuB2SDEMdQvMj5Ndt_Q5skeDfH2c9UI'
    }),
    TooltipModule.forRoot(),
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
    {path:'products/:type',component:ProductsComponent},
    {path:'contactUs',component:ContactUsComponent},
    {path:"",redirectTo:'homepage',pathMatch:'full'}
    
  ])
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
