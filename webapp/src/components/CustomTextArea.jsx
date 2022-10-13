const CustomTextArea = ({ placeholder, hintText }) => {
    return <div className="input-box">

        <label htmlFor="sd">{placeholder}</label>
        <textarea placeholder={placeholder} id="sd" multiple rows={8} cols={10} className="text-area" />
    </div>;
};
export default CustomTextArea;