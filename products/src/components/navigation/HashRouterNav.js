import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import ProductList from "../ProductList";
import ViewProduct from "../ViewProduct";

const HashRouterNav = () => {
    return (
        <>
            <HashRouter basename="/hash-products">
                <Routes>
                    <Route path="/" element={<Outlet />} />
                    <Route index element={<ProductList />} />
                    <Route path="/list" element={<ProductList />} />
                    <Route path="/view" element={<ViewProduct />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default HashRouterNav;