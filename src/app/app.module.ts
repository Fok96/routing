import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './components/product/product.component';
const routes =[
  {
    path:"",
    component:HomeComponent
  },{
    path:"products",
    component:ProductsComponent
  },{
    path:"product/:productId",
    component : ProductComponent
  },
  {
    path:"about",
    component:AboutComponent
  },{
    path:"contact",
    component:ContactsComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMBCo_h4xE8vRCDagsr3f8y8qMwk6-dUo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
