import { AppComponent } from '../app.component';
import { ListingComponent } from '../listing/listing.component';
import { AppDetailComponent } from '../detail/detail.component';

export const ContactsAppRoutes = [
    { path: '', component: AppComponent },
    { path: 'news', component: ListingComponent },
    { path: 'news/details/:id', component: AppDetailComponent }
];
