import React from 'react'
import { faker } from '@faker-js/faker';


const AddMusic = ({onAddSong}) => {
  
  const addSongHandler=()=>{
    const randomSong = faker.music.songName();
    onAddSong(randomSong)
  }
  return (
    <div>
      <button onClick={addSongHandler}>Add Song +</button>
    </div>
  )
}

export default AddMusic