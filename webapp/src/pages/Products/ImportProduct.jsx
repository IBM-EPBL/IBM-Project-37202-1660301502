import CustomImageSelector from "../../components/CustomMultipleImageSelecter";
import PrimaryButton from "../../components/PrimaryButton";

const ImportProduct = () => {
    return (
        <div>
            <h4 className="mb-5 m-1  ">Import/Export Product</h4>
            <CustomImageSelector placeholder={"Select File"} />
            <div className="row justify-content-start">
                <div className="col-md-3 mx-md-3 col-5">
                    <PrimaryButton text={"Import"} mt={"17px"} width={"90%"} height={"4.9vh"} /></div>
                <div className="outlined-button col-md-3 mx-4 col-5 mt-3 ">
                    Import / Export
                </div>
            </div>
            <h4 className="mb-3 m-1  mt-5 ">Instructions</h4>
            <div >
                <ol>
                    <li className="text text-muted text-small my-2">Download the format file and fill it with proper data.
                    </li>
                    <li className="text text-muted text-small my-2">Download the format file and fill it with proper data.
                    </li>
                    <li className="text text-muted text-small my-2">Download the format file and fill it with proper data.
                    </li>
                    <li className="text text-muted text-small my-2">Download the format file and fill it with proper data.
                    </li>
                </ol>
            </div>

        </div>
    );
};
export default ImportProduct;
