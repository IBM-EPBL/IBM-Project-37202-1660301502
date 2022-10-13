import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import SideBar from "../components/SideBar";

import "../scss/custom.scss";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
// import Profile from "./Admin/Profile";
// import AddNewBanner from "./Banners/AddNewBanner";
// import Banners from "./Banners/Banners";
// import AddNewBranch from "./Branches/AddNewBranch";
// import Branches from "./Branches/Branches";
// import AddNewCategory from "./Categories/AddNewCategory";
// import Categories from "./Categories/Categories";
// import LiveChat from "./Chat/LiveChat";
// import Notification from "./ChatAndNotifications/Notifications";
// import AddNewCoupon from "./Coupons/AddNewCoupon";

// import AddPosOrder from "./Orders/AddPosOrder";
import OrderDetails from "./Orders/OrderDetails";
import Orders from "./Orders/Orders";
import AddProduct from "./Products/AddProduct";
// import ImportProduct from "./Products/ImportProduct";
import Products from "./Products/Products";
// import ProductReports from "./Reports/ProductReports";
// import SalesReports from "./Reports/SalesReports";

// import SMSConfig from "./Settings/SMSConfig";
// import StoreConfig from "./Settings/StoreConfig";
// import SystemConfig from "./Settings/SystemConfig";
// import TimeSlots from "./Settings/TimeSlots";
// import SubCategories from "./SubCategories/SubCategories";

const DashBoard = () => {
    const [cssClass, setCssClass] = useState("top-nav");
    function logit() {
        // setScrollY(window.pageYOffset);
        if (window.location.pathname === "/") {
            if (window.scrollY > 40) {
                setCssClass("top-nav nav-active");
            } else if (window.scrollY < 40) {
                setCssClass("top-nav");
            }
        }
    }
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, []);

    return (
        <div>
            <BrowserRouter>
                <div className="row down" >

                    {window.location.pathname !== "/login" && <div className="col-1 col-md-2 col-sm-12 col- col-xs-8 mobile-nav p-0 sb " >
                        <SideBar /></div>}

                    <div className={`col-12 col-md-${window.location.pathname !== "/login" ? 10 : 12}    col-sm-12 p-0 m-0 p-md-0  mx-0`}>
                        {window.location.pathname !== "/login" && <Container fluid className={`p-3 mx-0 ${cssClass}`}>
                            <div className="row mx-0">
                                <h6>Hello, Inder Pal Singh</h6>
                            </div>
                        </Container>}

                        <div className="main-content">
                            <div className="m-3">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/login" element={<Login />} />
                                    {/* <Route path="/profile" element={<Profile />} /> */}
                                    <Route path="/products/add" element={<AddProduct />} />
                                    <Route path="/products/list" element={<Products />} />
                                    {/* <Route
                                        path="/products/export-import"
                                        element={<ImportProduct />}
                                    />
                                    <Route path="/coupons/add" element={<AddNewCoupon />} />
                                    <Route path="/coupons/list" element={<Coupons />} />
                                    <Route path="/categories/list" element={<Categories />} />
                                    <Route path="/categories/add" element={<AddNewCategory />} />
                                    <Route
                                        path="/sub-categories/list"
                                        element={<SubCategories />}
                                    /> */}
                                    {/* <Route path="/banners/list" element={<Banners />} />
                                    <Route path="/banners/add" element={<AddNewBanner />} />
                                    <Route path="/config/store" element={<StoreConfig />} />
                                    <Route path="/config/system" element={<SystemConfig />} />
                                    <Route path="/config/store/timings" element={<TimeSlots />} />
                                    <Route path="/config/sms" element={<SMSConfig />} /> */}
                                    <Route path="/orders/list" element={<Orders />} />
                                    {/* <Route
                                        path="/products/reports"
                                        element={<ProductReports />}
                                    />
                                    <Route
                                        path="/orders/reports"
                                        element={<SalesReports />}
                                    /> */}
                                    {/* <Route path="/branches/list" element={<Branches />} />
                                    <Route path="/branches/add" element={<AddNewBranch />} />
                                    <Route path="/report/sales" element={<SalesReports />} />
                                    <Route path="/report/product" element={<ProductReports />} />
                                    <Route path="/chat" element={<LiveChat />} />
                                    <Route path="/pos/add" element={<AddPosOrder />} /> */}
                                    <Route path="/order/:id" element={<OrderDetails />} />
                                    {/* <Route path="/e" element={<Notification />} /> */}
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
            <Outlet />
        </div>
    );
};
export default DashBoard;
