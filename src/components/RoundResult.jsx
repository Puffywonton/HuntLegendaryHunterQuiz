/* eslint-disable react/prop-types */
import classes from "./RoundResult.module.css"
const RoundResult = (props) => {
    return (
        <dialog className={classes.dialog} id="toto">
            <div className={classes.divbox}>
                <span className={props.data.color === "red" ? classes.red : classes.white}>{props.data.message}</span>
            </div>
        </dialog>
    )
}

export default RoundResult