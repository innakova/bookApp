import classes from './MyInputs.module.css'

export const MyInputs = ({...props}) => {
    console.log('input joy',props)
    return (
        <input className={classes.myInputs} {...props}/>
    )
}