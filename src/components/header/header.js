import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AddNewBook from '../addNewBook/addNewBook';
import { useState } from 'react';


export const Header = ({heder_title, setPosts}) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
    <>
        <div className='menu'>
            <h1>Читалка</h1>
            <div className='iconMenu'>
                <AddIcon  
                
                sx={{fontSize: '2rem'}}
                onClick={toggleModal}
                />
                <AddNewBook
                setPosts={setPosts}
                modal={modal}
                toggleModal={toggleModal}
                 />
                <SearchIcon />
            </div>
        </div>
    </>
    )
}