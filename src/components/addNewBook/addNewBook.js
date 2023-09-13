import "./addNewBook.css"

export default function AddNewBook ({modal, toggleModal}) {

      return (
        <>
       
       {modal && (
        <div className="modal">
            <div 
            onClick={toggleModal}
            className="overlay"
            ></div>
            <div className="modal-content">
                <h2
                onClick={()=>console.log('hi')}
                >Window</h2>
                <p>
                    hdbvcgdbhdbjd
                    sdbchdvbdfjv
                    jksdnkdv
                </p>

                <button
                className="close-modal"
                onClick={()=>console.log('hi')}
                >Close</button>
            </div>
        </div> 
        )} 
        </>
    );
}