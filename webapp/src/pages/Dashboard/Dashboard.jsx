import "../../scss/dashboard.scss";
import RecentOrders from "./components/RecentOrders";
import SalesChart from "./components/SalesChart";
import Stats from "./components/Stats";
import TopSellingProducts from "./components/TopSellingProducts";

const Dashboard = () => {
    return (
        <div className="dashboard m-3 ">
            <Stats />
            <div className="mt-5 row justify-content-between">
                <RecentOrders />
                <SalesChart fullSize={7} />
            </div>
            <div className="mt-5 row justify-content-between">
                <TopSellingProducts />
                <SalesChart fullSize={8} />
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Dashboard;
