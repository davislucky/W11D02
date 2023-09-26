import { NavLink } from "react-router-dom"

export function Navigation () {
    return (
        <>
            <nav>
                <NavLink to='/survey'>Survey</NavLink>
                <NavLink exact to='/'>Home</NavLink>
            </nav>
        </>
    )
}