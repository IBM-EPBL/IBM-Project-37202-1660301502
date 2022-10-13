

const CustomTextField = ({ placeholder, hintText, type, hidePlaceholder, readOnly, isRequired }) => {
    return <div className="input-box">

        {hidePlaceholder ? null : <label htmlFor="sd">{placeholder}</label>}
        <input placeholder={hintText} id="sd" type={type} readOnly={readOnly} required={isRequired} />
    </div>;
};
export default CustomTextField;