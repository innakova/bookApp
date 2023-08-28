import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export const Header = ({heder_title}) => {
    return (
    <>
        <div className='menu'>
            <h1>Читалка</h1>
            <div className='iconMenu'>
                <AddIcon  sx={{fontSize: '2rem'}}/>
                <SearchIcon />
            </div>
        </div>
    </>
    )
}