import classes from './MyButton.module.css'

export const MyButton = ({children, ...props}) => {
    console.log(classes)
    return (
        <button {...props} className={classes.myButtontop}>
            {children}
        </button>
    )
}