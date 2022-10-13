import TableHead from "../../components/TableHead";
import "../../scss/order-details.scss";
import "../../scss/table.scss";
const OrderDetails = () => {
    return (
        <div>
            <h4 className="mb-0 mb-md-3 m-1  ">Order Details</h4>
            <div className="order-main-details">
                <div className="row">
                    <div className="col-md-5 col-12 m-3 m-md-0 ">
                        <OrderDetailsKeyValueCard
                            keys={"Order Number"}
                            value={"330108990023"}
                        />
                        <OrderDetailsKeyValueCard
                            keys={"Order Date"}
                            value="26 August 2022"
                        />
                        <OrderDetailsKeyValueCard
                            keys={"Customer Name:"}
                            value="Inder Pal Singh"
                        />
                        <OrderDetailsKeyValueCard keys={"Phone:"} value="+91-7051259395" />
                        <OrderDetailsKeyValueCard
                            keys={"Address:"}
                            value="H.NO 322, Fatehpora Khawaja Bagh Baramulla
193101,
JK, India"
                        />
                    </div>
                    <div className="col-md-6 col-12 m-3 m-md-0">
                        <OrderDetailsKeyValueCard
                            keys="Delivery Date"
                            value={"21 July 2022"}
                        />
                        <OrderDetailsKeyValueCard
                            keys="Timeslot"
                            value={"12:00:00 - 17:00:00"}
                        />
                        <OrderDetailsKeyValueCard keys={"Recurring Order:"} value="No" />
                        <OrderDetailsKeyValueCard keys={"Comments:"} value="Comments:" />
                    </div>
                    <h4 className="mb-3 m-1  mt-md-5 ">Ordered Items</h4>
                    <div className="ordered-items">
                        <div className="table-main-box p-0 mx-3 ">
                            <table className="table  table-borderless">
                                <TableHead
                                    items={[
                                        "#",
                                        "NAME",
                                        "QUANTITY",
                                        "UNIT/PRICE",
                                        "TAX PERCENTAGE",
                                        "TAX AMOUNT",
                                        "TOTAL",
                                    ]}
                                />
                                <tbody className="iem">
                                    {[1].map((c, i) => (
                                        <tr className="" key={i}>
                                            <td style={{ paddingLeft: "30px", width: "20px" }}>
                                                {i + 1}
                                            </td>
                                            <td>Horlicks 500Gm</td>
                                            <td>3</td>
                                            <td>31</td>
                                            <td>18</td>
                                            <td>331</td>
                                            <td>₹1000</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="payment-summary-card m-3 p-5 br-3   ">
                                <h5>Payment Summary</h5>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="row justify-content-between my-3">
                                            <div className="col-md-6 col-6">
                                                <span className="key">Sub Total</span>
                                            </div>
                                            <div className="col-6 text-end">
                                                <span className="text-center">₹3999</span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-between my-3">
                                            <div className="col-md-6 col-6">
                                                <span className="key">Discount (GET100)</span>
                                            </div>
                                            <div className="col-6 text-end">
                                                <span className="text-center">₹999</span>
                                            </div>
                                        </div>
                                        <div className="row justify-content-between my-3">
                                            <div className="col-md-6 col-6">
                                                <span className="key">Txt (8%)</span>
                                            </div>
                                            <div className="col-6 text-end">
                                                <span className="text-center">₹476.3</span>
                                            </div>
                                        </div>

                                        <div className="row justify-content-between my-3">
                                            <div className="col-md-6 col-6">
                                                <span
                                                    className="key"
                                                    style={{
                                                        fontWeight: "600",
                                                        fontSize: "17px",
                                                    }}
                                                >
                                                    Total
                                                </span>
                                            </div>
                                            <div className="col-6 text-end">
                                                <span
                                                    className="text-center"
                                                    style={{
                                                        fontWeight: "600",
                                                        fontSize: "17px",
                                                    }}
                                                >
                                                    ₹4399
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function OrderDetailsKeyValueCard({ keys, value }) {
    return (
        <div className="row my-3">
            <div className="col-md- col-4">
                <span className="key">{keys}</span>
            </div>
            <div className="col-6">
                <span className="value">{value}</span>
            </div>
        </div>
    );
}

export default OrderDetails;
