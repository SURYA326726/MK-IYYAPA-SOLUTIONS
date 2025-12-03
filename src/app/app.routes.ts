import { Routes } from '@angular/router';
import { Admin } from './body/admin/admin';
import { Body } from './body/body';
import { ProductQuotation } from './body/product-quotation/product-quotation';

export const routes: Routes = [
    {
        path:'',
        component:Body
    },
    {
        path:'admin',
        component:Admin
    },
    {
        path:'newQuote',
        component:ProductQuotation
    }
];
