import "../scss/dropdown.scss";
import dropDown from "../assets/icons/dropdown.svg"
import useComponentVisible from "../hooks/useComponentVisible";
const CustomDropDown = ({ selectedItem, items, label, placeholder, mt }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <div className="dropdown-main" style={{
            marginTop: mt
        }}>
            {label == null ? null : <label htmlFor="sd">{label}</label>}
            <div className="dropdown-box " onClick={() => setIsComponentVisible(true)}>
                <div className="col-6">

                    <p>{selectedItem ?? placeholder ?? 'Date Range'}</p>
                </div>
                <div className="col-6 text-end">
                    <img src={dropDown} width="10px" alt="dropdown" />
                </div>

                {isComponentVisible && <div ref={ref}>
                    <div className={'dropdown-content'}>
                        {items.map((item,) => <p className="dropdown-content-item">{item}</p>)}
                    </div>
                </div>}
            </div ></div>
    );
};
export default CustomDropDown;
