import SettingsIcon from "../assets/icons/three_dots.png"


const ActionCard = () => {
    return <div className="action-card">

        <img src={SettingsIcon} width={"7%"} color="white" alt="settings" style={{
            marginInline: "0px"
        }} />
    </div>;
};
export const dropDown = <svg xmlns="http://www.w3.org/2000/svg" width="14.478" height="14.206" viewBox="0 0 34.478 19.206">
    <g id="Icon_ionic-ios-arrow-dropright" data-name="Icon ionic-ios-arrow-dropright" transform="translate(34.478) rotate(90)">
        <path id="Path_10" data-name="Path 10" d="M.817.851a2.674,2.674,0,0,1,3.912,0L18.4,15.327a3.035,3.035,0,0,1,.086,4.024L5.015,33.615A2.666,2.666,0,0,1,1.1,33.63a3.033,3.033,0,0,1,0-4.13l11.45-12.268L.817,4.965A3,3,0,0,1,.817.851Z" transform="translate(0)" fill="#400835" />
    </g>
</svg>

export default ActionCard;