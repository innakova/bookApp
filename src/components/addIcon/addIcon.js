// import AddNewBook from '../addNewBook/addNewBook'
// import './addIcon.css'

// export const AddIcon() {
//     return (
//         <div>
//             <AddNewBook />
//         </div>
//     )
//     }


import React, { useState } from "react";
import "./addIcon.css"

export default function AddIcon () {

    // const [modal, setModal] = useState(false);

    // const toggleModal = () => {
    //     setModal(!modal)
    // }

    return (
        <>
      
        <div className="modal">
            <div 
            onClick={toggleModal}
            className="overlay"
            ></div>
            <div className="modal-content">
                <h2>Window</h2>
                <p>
                    hdbvcgdbhdbjd
                    sdbchdvbdfjv
                    jksdnkdv
                </p>

                <button
                className="close-modal"
                onClick={toggleModal}
                >Close</button>
            </div>
        </div> 
        
        </>
    );
}