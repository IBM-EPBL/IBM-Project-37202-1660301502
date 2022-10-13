import CustomDropDown from "../../components/CustomDropDown";
import CustomImageSelector from "../../components/CustomMultipleImageSelecter";
import CustomTextArea from "../../components/CustomTextArea";
import CustomTextField from "../../components/CustomTextField";
import PrimaryButton from "../../components/PrimaryButton";

const AddProduct = () => {
    return (
        <div>
            <h3 className="mb-5 m-1">Add Product</h3>
            <div className="fowwm">
                <div className="">
                    <div className="col-11 col-md-8">
                        <CustomTextField placeholder={"Name"} hintText="Product Name" />
                    </div>
                    <div className="col-11 col-md-8">
                        <CustomTextArea placeholder={"Description"} />
                    </div>
                    <div className="row justify-content-md-start justify-content-start">
                        <div className="col-md-2 col-6">
                            <CustomTextField placeholder={"Price"} />
                        </div>
                        <div className="col-md-2 col-5 " style={{

                        }}>
                            <CustomDropDown placeholder={"Unit"} hintText="Unit" items={["Last 7 Days", "Last 30 Days", "Last 3 Months"]}
                                label="Date Range" />
                        </div>
                        <div className="col-md-2 col-6">
                            <CustomTextField placeholder={"Tax"} />
                        </div>
                        <div className="col-md-2 col-5">
                            <CustomTextField placeholder={"Tax Type"} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-6">
                            <CustomTextField placeholder={"Category"} />
                        </div>
                        <div className="col-md-2 col-5">
                            <CustomTextField placeholder={"Sub Category"} />
                        </div>
                        <div className="col-md-2 col-6">
                            <CustomTextField placeholder={"Discount"} />
                        </div>
                        <div className="col-md-2 col-5">
                            <CustomTextField placeholder={"Discount Type"} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-5">
                            <CustomTextField placeholder={"Stock"} />
                        </div>
                        <div className="col-md-2 col-5">
                            <CustomTextField placeholder={"Featured?"} />
                        </div>
                    </div>

                    <CustomImageSelector
                        placeholder={
                            "Upload Product Images (max 6) Recommended Size (1024*768)"
                        }
                    />
                    <PrimaryButton text={"Add Product"} width={"40%"} height={"4.6vh"} />

                </div>
            </div>
        </div>
    );
};
export default AddProduct;
