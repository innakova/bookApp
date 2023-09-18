import classes from './MyButton.module.css'
import Button from '@mui/material/Button';

export const MyButton = ({children, ...props}) => {
    console.log(classes)
    return (
        <Button {...props} 
            className={classes.myButtontop} 
            variant='contained' 
            color='secondary' 
            // size="large"
        >
             {children}
        </Button>
        // <button {...props} className={classes.myButtontop}>
        //     {children}
        // </button>
    )
}