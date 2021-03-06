import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Menu } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MediaProvider } from '../providers/media/media';
import { LogoutPage } from '../pages/logout/logout';
import { MenuPage } from '../pages/menu/menu';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { PipesModule } from '../pipes/pipes.module';
import { UploadPage } from '../pages/upload/upload';
import { Chooser } from '@ionic-native/chooser';
import { Camera } from '@ionic-native/camera';
import { ThumbnailPipe } from '../pipes/thumbnail/thumbnail';



@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    HomePage,
    LogoutPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    TabsPage,
    UploadPage,
    ThumbnailPipe,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    HomePage,
    LogoutPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    TabsPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PhotoViewer,
    MediaProvider,
    AuthProvider,
    Chooser,
    Camera
  ],
})
export class AppModule {
}
