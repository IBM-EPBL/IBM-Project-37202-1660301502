import uploadIcon from "../assets/icons/upload.svg"
const CustomImageSelector = ({ placeholder }) => {
    return <div className="input-box">
        <label htmlFor="sd">{placeholder}</label>
        <div className="upload-image-box">
            <img src={uploadIcon} width="30px" alt="upload" />
        </div>
    </div>;
};
export default CustomImageSelector;