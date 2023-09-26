import React from 'react'
import { faker } from '@faker-js/faker';
import { useDispatch } from 'react-redux';
import { addSong } from '../store/slices/songSlice';

//{onAddSong}
const AddMusic = () => {

  const dispatch = useDispatch();
  
  const addSongHandler=()=>{
    const randomSong = faker.music.songName();
    //onAddSong(randomSong)
    dispatch(addSong(randomSong));

  }
  return (
    <div>
      <button onClick={addSongHandler}>Add Song +</button>
    </div>
  )
}

export default AddMusic