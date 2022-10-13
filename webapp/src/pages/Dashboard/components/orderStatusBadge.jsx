
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