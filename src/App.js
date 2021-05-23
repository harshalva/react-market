import './App.css';
import Anime from './Components/Anime';
import AddAnime from './Components/AddAnime';
import React, { useState } from 'react';

const App = () => {
   
//  const [animes, addNew] = useState(DUMMY);
//  const addNewAnime = (anime) => {
//    addNew((prevState) => {
//      return [anime, ...prevState];
//    });
const [animes, setAnimes] = useState([]);

async function addNewAnime(anime) {
  await fetch('https://anime-react-default-rtdb.firebaseio.com/anime.json',{
    method: 'POST',
    body: JSON.stringify(anime),
    header: {
      'Content-Type': 'application/json'
    }
  });
};
  async function fetchAnime() {
    const response = await fetch('https://anime-react-default-rtdb.firebaseio.com/anime.json');
    const data = await response.json();
    const finalList = [];
    for(let key in data){
      finalList.push({
        id: data[key].id,
        title: data[key].title,
        rate: data[key].rate,
        available: data[key].available
      });
    }

//    const transformData = data.map((animeData) => {
//      return {
//      id: animeData.id,
//      title: animeData.title,
//      rate: animeData.rate,
//      available: animeData.available
//    };
//  });
  setAnimes(finalList);
  };

  return (
    <div className = "App">
      <AddAnime onSaveAnime = {addNewAnime} />
      <button onClick = {fetchAnime}>Fetch the Animes</button>
      <Anime item = {animes}/>
    </div>
      );
}

export default App;
