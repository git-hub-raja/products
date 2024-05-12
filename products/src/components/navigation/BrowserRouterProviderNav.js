import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "../ProductList";
import ViewProduct from "../ViewProduct";
import AddProduct from "../AddProduct";
import ReactCompLifeCycleHooksHOC from "../utils/ReactCompLifeCycleHooks";

const routes = [
    { path: '/', element: <ProductList /> },
    { path: '/list', element: <ProductList /> },
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