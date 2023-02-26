// Layouts
// Pages
import Home from '~/pages/Home';
import Itemps from '~/pages/Items';
import Login from '~/pages/Login';
import Payment from '~/pages/Payment';
import Cart from '~/pages/Cart';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/items', component: Itemps },
    { path: '/login', component: Login, layout: 'null' },
    { path: '/payment', component: Payment },
    { path: '/cart', component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
