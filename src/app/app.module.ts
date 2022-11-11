import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PageTitleComponent } from './Components/page-title/page-title.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FeaturedPostComponent } from './Components/featured-post/featured-post.component';
import { CardPostComponent } from './Components/card-post/card-post.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageTitleComponent,
    CategoriesComponent,
    FeaturedPostComponent,
    CardPostComponent,
    NavigationComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
