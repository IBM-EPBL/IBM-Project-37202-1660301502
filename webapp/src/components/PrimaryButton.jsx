import "../scss/primary-items.scss"
const PrimaryButton = ({ text, width, mt, height }) => {
    return <button className="primary-button mx-1 mx-md-0" style={{ width: width, marginTop: mt, height: height }} placeholder={text} type={"submit"}>{text}</button>
        ;
};
export default PrimaryButton;