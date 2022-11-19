import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPostComponent } from './Components/card-post/card-post.component';
import { FeaturedPostComponent } from './Components/featured-post/featured-post.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { PageTitleComponent } from './Components/page-title/page-title.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostComponent } from './Pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageTitleComponent,
    FeaturedPostComponent,
    CardPostComponent,
    NavigationComponent,
    SubscribeComponent,
    FooterComponent,
    PostComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
