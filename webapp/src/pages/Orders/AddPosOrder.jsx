import CustomTextField from "../../components/CustomTextField";
import PrimaryButton from "../../components/PrimaryButton";
import horlicks from "../../assets/temp/horlicks.png";
import "../../scss/pos.scss";
import PlusButton from "../../components/PlusButton";
import deleteIcon from "../../assets/icons/delete.svg";
import MinusButton from "../../components/MinusButton";
const AddPosOrder = () => {
    return (
        <div>
            <h3 className="mb-5 m-1">Add POS Order </h3>
            <div className="row ">
                <div className="col-md-7 col-11">
                    <div className="row">
                        <div className="col-8">
                            <CustomTextField hintText={"Search by name or SKU"} />
                        </div>
                        <div className="col-4">
                            <PrimaryButton text={"Submit"} height="4.6vh" mt="34px" width={"100%"} />
                        </div>
                    </div>
                    <div className="grid-products m-3 row justify-content-between">
                        {[1, 2, 3, 4, 5, 6, 7].map((p) => (
                            <div className="col-md-4 col-12" key={p}>
                                <div className="product-card  m-2 text-center ">
                                    <img src={horlicks} width="120px" alt="Product " />
                                    <h6 className="text-start ">Horlicks 500gm</h6>
                                    <div className="product-card-bottom row justify-content-between mx-1 mt-3 mb-2">

                                        <div className="col-2">
                                            <PlusButton />
                                        </div>
                                        <div className="col-1" style={{
                                            textAlign: "center",
                                            alignItems: "center",
                                            marginLeft: "15px"
                                        }}>
                                            2
                                        </div>

                                        <div className="col-1">
                                            <MinusButton />
                                        </div>

                                        <div className="col-2 ml-3 mx-4">
                                            <PrimaryButton text={"Add"} width={"90"} />
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="pos-summary-card p-3">
                        <h5> Payment Summary</h5>
                        <CustomTextField
                            placeholder={"Customer Phone"}
                            hintText="+91-7051259395"
                        />
                        <h6 className="mt-3"> Products</h6>
                        <div
                            style={{
                                maxHeight: "25vh",
                                overflow: "scroll",
                            }}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                                <div className="product-card-collapsed px-3 pt-3 my-1">
                                    <img src={horlicks} alt="" width={"8%"} height={"8%"} />
                                    <div className="col mx-3">
                                        <h6
                                            className="mx"
                                        >
                                            Horlicks 500Gm pack of 4
                                        </h6>
                                        <div className="row mx-1 justify-content-start">
                                            <div className="col-1">
                                                <PlusButton />
                                            </div>
                                            <div className="col-1"></div>
                                            <div className="col-1">
                                                <p>3</p>
                                            </div>
                                            <div className="col-1"></div>
                                            <div className="col-4">
                                                <MinusButton />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <h5 style={{
                                            color: "#121212"
                                        }}>₹300</h5>
                                        <div className="mx-2 float-right text-end">
                                            <img src={deleteIcon} alt="" width={"30%"} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <h5 className="mt-3">
                            Payment Summary
                        </h5>
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
                                        <span className="key" style={{
                                            fontWeight: "600",
                                            fontSize: "17px"
                                        }}>Total</span>
                                    </div>
                                    <div className="col-6 text-end">
                                        <span className="text-center" style={{
                                            fontWeight: "600",
                                            fontSize: "17px"
                                        }}>₹4399</span>
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
export default AddPosOrder;
