import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { ListingComponent } from '../listing/listing.component';
import { AppDetailComponent } from '../detail/detail.component';
import { FormsComponent } from '../forms/forms.component';

export const ContactsAppRoutes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: ListingComponent },
    { path: 'news/details/:id', component: AppDetailComponent },
    { path: 'forms', component: FormsComponent }
];
