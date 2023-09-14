import "./addNewBook.css"

export default function AddNewBook ({modal, toggleModal}) {

      return (
        <>
       
       {modal && (
        <div className="modal btn-modal">
            <div 
            onClick={toggleModal}
            className="overlay"
            ></div>
            <div className="modal-content">
                <h2
                onClick={()=>console.log('hi')}
                >Add a new book</h2>
                <p>
                   Enter details
                </p>
                <div className="book-input">
                    <input type="text" placeholder="Book name" alt="Wind"></input>
                    <input type="text" placeholder="Book author" alt="King"></input>
                    <input type="number" placeholder="How meny pages" alt="100"></input>
                    {/* <input type="image" placeholder="Have a photo title"></input> */}
                </div>
                <button
                className="close-modal"
                onClick={toggleModal}
                >Close</button>
            </div>
        </div> 
        )} 
        </>
    );
}