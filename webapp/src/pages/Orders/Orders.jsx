import { useEffect, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import "../../scss/badges.scss";
import TableHead from "../../components/TableHead.jsx";
import "../../scss/table.scss";
import ActionCard from "../../components/ActionCard";
import { getOrders } from "../../mockData/ordersMock";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const customers = useSelector((state) => state.customer.data)
    console.log(customers);
    useEffect(() => {
        setOrders(getOrders());
        return () => { };
    }, []);

    return (

        <div className="my-5">

            <div className="row justify-content-between mx-0 " style={{}}>
                <div className="col-4 mb-3 mb-md-0">
                    <h4 className="title">Orders</h4>
                </div>
                <div className="col-md-7 col-12 ">
                    <div className="row mx-md-3 mx-1 justify-content-md-end justify-content-start">
                        <input
                            placeholder="Search Products"
                            className="col-md-4 col-6 mt-1 mx-md-3"
                        />
                        <PrimaryButton
                            mt={"5px"}
                            height="4.6vh"
                            width="30%"
                            className="col-1 col-md-4 mx-md-3"
                            text="Search"
                        />

                        <div className="outlined-button col-md-2 col-12 my-3 my-md-1 mx-md-3 ">
                            Import / Export
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-main-box" >
                <table className="  table-borderless" id="custom-table">
                    <TableHead
                        items={[
                            "#",
                            "ORDER NO",
                            "DELIVERY DATE",
                            "TIME SLOT",
                            "CUSTOMER",
                            "TOTAL",
                            "STATUS",
                            "PAYMENT METHOD",
                            "ACTION",
                        ]}
                    />

                    {orders.map((item, i) => (
                        <tr className="" key={i}>
                            <td style={{ margin: "10px", width: "20px" }}>{i + 1}</td>
                            <td>
                                <Link to="/order/s232">{item.orderId}</Link>
                            </td>

                            <td>{new Date(item.date).toDateString()}</td>

                            <td>{item.slot}</td>
                            <td>{item.customer}</td>
                            <td>₹{item.total}</td>
                            <td>
                                <OrderStatusBadge status={item.status} />
                            </td>
                            <td style={{ color: "white", fontWeight: "700" }}>
                                <OrderStatusBadge status={item.paymentMethod} />
                            </td>
                            <td className="">
                                <ActionCard />
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};
export const OrderStatusBadge = ({ status }) => {
    return (
        <center>   <div
            className="order-status-badge "
            style={{
                backgroundColor: `${getBadgeColor(status)}`,
                width: "60%",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            {status}
        </div></center>
    );
};
function getBadgeColor(status) {
    switch (status) {
        case "Out For Delivery":
            return "#F6F2E7";
        case "Delivered":
            return "#ECFCE9";
        case "Processing":
            return "#EDF1FE";
        case "Cancelled":
            return "#FFE1E1";
        case "Confirmed":
            return "#F4EAFA";
        case "COD":
            return "#1496A7";
        case "UPI":
            return "#E27136";
        default:
            return "#6C45EE";
    }
}
export default Orders;
