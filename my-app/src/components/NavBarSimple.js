import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: "Hello guest!",
            logStatus: "Login!",
        };
    }

    handleClick() {
        this.setState((prevState) => {
            console.log("Previous state:" + prevState)
            return {
                greeting: prevState.greeting === "Hello guest!" ? "Welcome back user!" : "Hello guest!",
                logStatus: prevState.logStatus === "Login!" ? "Logout" : "Login!",
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <button onClick={() => this.handleClick()}>{this.state.greeting}</button>
                <button onClick={() => this.handleClick()}>{this.state.logStatus}</button>
            </div>
        )
    }
}

export default NavBarSimple;