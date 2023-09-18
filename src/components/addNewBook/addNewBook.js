import { useState } from "react";
import { MyButton } from "../UI/Buttons/MyButton";
import { MyInputs } from "../UI/Inputs/MyInputs";
import "./addNewBook.css"

export default function AddNewBook ({modal, toggleModal, setPosts}) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [pages, setPages] = useState()

    const addNewBookToList = (e) => {
        e.preventDefault()
        const newPostBook = {
            id: Date.now(),
            title,
            body,
            pages
        }
        setPosts(oldPosts => ([...oldPosts, newPostBook]))  
        setTitle('')
        setBody('')
        setPages('')
    }

      return (
        <>
       
       {modal && (
        <div className="modal btn-modal">
            <div 
            onClick={toggleModal}
            className="overlay"
            ></div>
            <div className="modal-content">
                <h2 className="modal-content-title">Add a new book</h2>
                {/* <p>
                   Enter details
                </p> */}
                <div className="book-input">
                    <MyInputs
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text" 
                        placeholder="Book name" 
                        alt="Wind"></MyInputs>
                    <MyInputs 
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        type="text" 
                        placeholder="Book author" 
                        alt="King"></MyInputs>
                    <MyInputs
                    value={pages}
                    onChange={e => setPages(e.target.value)}
                    type="number" 
                    placeholder="How meny pages" alt="100"></MyInputs>
                    {/* <input type="image" placeholder="Have a photo title"></input> */}
                </div>
                <div className="modal-button-block">
                    <MyButton
                    className="close-modal"
                    onClick={toggleModal}
                    >Close</MyButton>
                    <MyButton 
                    className="close-modal"
                    onClick={addNewBookToList}
                    >Add</MyButton>
                </div>
            </div>
        </div> 
        )} 
        </>
    );
}