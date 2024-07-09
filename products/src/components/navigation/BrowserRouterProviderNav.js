import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "../ProductList";
import ViewProduct from "../ViewProduct";
import AddProduct from "../AddProduct";
import LandingPage from "../LandingPage";
import Loading from "../LoaderComponent";
import SignIn from "../SignIn";
import Cart from "../CartComponent"
import ReactCompLifeCycleHooksHOC from "../utils/ReactCompLifeCycleHooks";

const routes = [
    { path: '/', element: <SignIn /> },
    { path: '/lpg', element: <LandingPage /> },
    { path: '/list', element: <ProductList /> },
    { path: '/cart', element: <Cart /> },
    { path: '/load', element: <Loading /> },
    { path: '/view', element: <ViewProduct /> },
    { path: '/add', element: <AddProduct /> },
    { path: '/lifecycle', element: <ReactCompLifeCycleHooksHOC /> }
];

const opts = {
    basename: '/router-provider-products'
}

const router = createBrowserRouter(routes, opts);

const BrowserRouterProviderNav = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default BrowserRouterProviderNav;