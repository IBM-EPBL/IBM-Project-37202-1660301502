import { useEffect, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { getProducts } from "../../mockData/productsMock";
import TableHead from "../../components/TableHead.jsx";
import "../../scss/table.scss";
import { Outlet } from "react-router-dom";
import ActionCard from "../../components/ActionCard";
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(getProducts());
        return () => { };
    }, []);

    return (
        <div>
            <div className="row justify-content-between">
                <div className="col-4">
                    <h4 className="title">Products</h4>
                </div>
                <div className="col-md-7 col-12 ">
                    <div className="row mx-md-3 mx-1 justify-content-md-end justify-content-center">
                        <input
                            placeholder="Search Products"
                            className="col-md-5 col-8 mt-1"
                        />
                        <PrimaryButton mt={"4px"} width="23%" height={"43px"} className="col-1 col-md-2 mx-3" text={"search"} />
                        <div className="outlined-button col-md-2 col-11 mx-2  mt-1 ">
                            Import / Export
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-main-box">
                <table id="custom-table">
                    <TableHead
                        items={[
                            "#",
                            "IMAGE",
                            "NAME",
                            "RATINGS",
                            "STATUS",
                            "PRICE",
                            "STOCK",
                            "ACTION",
                        ]}
                    />

                    {products.map((item, i) => (
                        <tr >
                            <td style={{ margin: "10px", width: "20px" }}>{i + 1}</td>
                            <td>
                                <img src={"https://picsum.photos/30"} alt="" width={"50px"} />
                            </td>
                            <td >{item.name}</td>
                            <td>{item.ratings}</td>
                            <td>
                                <div
                                    className={
                                        item.status === "Active"
                                            ? "active-badge"
                                            : "inactive-badge"
                                    }
                                >
                                    {item.status}
                                </div>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td><ActionCard /></td>
                        </tr>
                    ))}

                </table>
            </div>
            <Outlet />
        </div>
    );
};
export default Products;
