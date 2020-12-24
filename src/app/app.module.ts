import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { ApiModule } from 'src/api';
import { HttpClientModule } from '@angular/common/http';
import { EditPostModalComponent } from './edit-post-modal/edit-post-modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, PostComponent, EditPostModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
