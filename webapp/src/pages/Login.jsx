import Logo from "../assets/icons/logo.svg";
import Logo2 from "../assets/icons/logo2.svg";
import CustomTextField from "../components/CustomTextField";
import PrimaryButton from "../components/PrimaryButton";

import "../scss/login.scss";
const Login = () => {

    return (<div className="p-" style={{ backgroundColor: "#f4f4f4" }}>
        <img
            src={Logo2}
            color="white"
            width={"175px"}
            className="m-3 "
            alt={"sidemenu"}
        />
        <div className="login-main-content">
            <div className="login-box ">
                <div className="top-logo-login">
                    <img
                        src={Logo}
                        color="white"
                        width={"175px"}
                        className="m-1 "
                        alt={"sidemenu"}
                    />
                </div>
                <h4 className="sub-title">Login to Admin</h4>
                <form onSubmit={(e) => {
                    console.log("done");
                    e.preventDefault();
                    window.location.replace("/login")
                    // navigate("/")
                }}>
                    <CustomTextField placeholder={"Email"} type="email" isRequired={true} />
                    <CustomTextField placeholder={"Password"} type="password" isRequired={true} />
                    <div className="row">
                        <div className="checkbox-login col-4">
                            <input type="checkbox" />
                        </div>
                        <span className="col-4 my-2 rememberz"> Remember me</span>
                    </div>
                    <center> <PrimaryButton text={"Login"} height="4.6vh" width="400px" /></center>
                </form>
            </div>
        </div>
    </div>
    );
};
export default Login;
