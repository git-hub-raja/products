import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "../ProductList";
import ViewProduct from "../ViewProduct";

const BrowserRouterNav = () => {
    return (
        <>
            <BrowserRouter basename="/browse-products">
                <Routes>
                    {/* <Route path="/" element={<Outlet />} /> */}
                    <Route index element={<ProductList />} />
                    <Route path="/list" element={<ProductList />} />
                    <Route path="/view" element={<ViewProduct />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default BrowserRouterNav;