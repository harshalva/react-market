import React, { useState } from 'react';

function AddAnime (props) {
    const [userInput, userInputChange] = useState({
        id: '',
        title: '',
        rate: '',
        available: ''
    });

    const titleChange = (event) => {
        userInputChange((prevAnime) => {
            return {...prevAnime, title: event.target.value};
        });
    };
    const rateChange = (event) => {
        userInputChange((prevAnime) => {
            return {...prevAnime, rate: event.target.value};
        });
    };
    const availChange = (event) => {
        userInputChange((prevAnime) => {
            return {...prevAnime, available: event.target.value};
        });
    };
    const sendResponse = (event) => {
        event.preventDefault();
        props.onSaveAnime(userInput);
    };
    return (
        <div>
            <form onSubmit = {sendResponse}>
                Enter the anime: <input type="text" value={userInput.title} onChange={titleChange}/>
                Enter the rating: <input  type="text" value={userInput.rate} onChange={rateChange}/>
                Available in: <input type="text" value={userInput.available} onChange={availChange}/>
                <button type="submit">Add Anime</button>
            </form>
        </div>
    );
}

export default AddAnime;