/* eslint-disable react/prop-types */
import classes from "./Button.module.css"

const Button = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            {props.name}
        </button>    
    )
}

export default Button