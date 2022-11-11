import React  from "react"

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = () => {

    return (
        <div className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </div>
    )

}

export default Header