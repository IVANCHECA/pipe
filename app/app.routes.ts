import {provideRouter, RouterConfig} from '@angular/router';
import {Usercomponent} from "./user/user.component";

const routes:RouterConfig = [
    {path:"**", component:Usercomponent}
];

export const appRouterProviders = [provideRouter(routes)];