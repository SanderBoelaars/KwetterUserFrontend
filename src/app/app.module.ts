import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewPostComponent} from './components/new-post/new-post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserPostsComponent} from './components/user-posts/user-posts.component';
import {PostComponent} from './components/post/post.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {LogInComponent} from './components/log-in/log-in.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthenticationGuard} from './guards/authentication.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { NotifierComponent } from './components/notifier/notifier.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FollowingListComponent } from './components/following-list/following-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPostsComponent,
    PostComponent,
    NewPostComponent,
    NavbarComponent,
    LogInComponent,
    HomeComponent,
    RegisterComponent,
    NotifierComponent,
    FollowingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
    exports: [NewPostComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
