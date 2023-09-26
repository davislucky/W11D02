import logo from "../_assets/logo.png";

export function Head () {
    // const logo = require("../_assets/logo.png")
    return (
        <>
            <img src={logo} alt="logo"/>
            <h1>Survey Tool</h1>
            <h2>Home</h2>
        </>
    )
}