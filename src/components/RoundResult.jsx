/* eslint-disable react/prop-types */
import classes from "./RoundResult.module.css"

const RoundResult = (props) => {
    return (
        <dialog className={classes.modal} id="toto">
            <span>{props.message}</span>
        </dialog>
    )
}

export default RoundResult