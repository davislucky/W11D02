import logo from "../_assets/logo.png";

export function Head () {
    // const logo = require("../_assets/logo.png")
    return (
        <div className='home'>
            <img src={logo} alt="logo"/>
            <div className='home-words'>
                <h1>Survey Tool</h1>
                <h2>Home</h2>
            </div>
        </div>
    )
}