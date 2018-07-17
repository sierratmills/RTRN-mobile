import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NewAccountPage } from '../pages/new-account/new-account';
import { ProfilePage } from '../pages/profile/profile';
import { MainPage } from '../pages/main/main';
import { UserprofPage } from '../pages/userprof/userprof';
import { ShopPage } from '../pages/shop/shop';
import { MapPage } from '../pages/map/map';

import { ComponentsModule } from '../components/components.module';
import { SearchResultsPage} from '../pages/search-results/search-results';
import { StoreSitePage } from '../pages/store-site/store-site';
import { ProductService } from '../services/product.service';
import { CartPage } from '../pages/cart/cart';

import { FormsModule } from '@angular/forms'
import { PaymentPage } from '../pages/payment/payment';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ListPage } from '../pages/list/list';
import { Order } from '../models/order';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { OrderPage } from '../pages/order/order';
import { OnlineStoresPage } from '../pages/online-stores/online-stores';
import { UserListsPage } from '../pages/user-lists/user-lists';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    LoginPage,
    NewAccountPage,
    ProfilePage,
    MainPage,
    UserprofPage,
    ShopPage,
    MapPage,
    SearchResultsPage,
    StoreSitePage,
    CartPage,
    PaymentPage,
    FavoritesPage,
    ListPage,
    OrderhistoryPage,
    OrderPage,
    OnlineStoresPage,
    UserListsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NewAccountPage,
    ProfilePage,
    MainPage,
    UserprofPage,
    ShopPage,
    MapPage,
    SearchResultsPage,
    StoreSitePage,
    CartPage,
    PaymentPage,
    FavoritesPage,
    ListPage,
    OrderhistoryPage,
    OrderPage,
    OnlineStoresPage,
    UserListsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
