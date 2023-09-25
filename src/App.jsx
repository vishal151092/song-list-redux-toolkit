import { useState } from 'react'
import './App.css'
import AddMusic from './component/AddMusic'
import ListMusic from './component/ListMusic'

function App() {
  const [songList, setSongList] = useState([])

  const addSongHandler = (song)=>{
    setSongList([...songList, song]);
    console.log(songList);
  }

  const removeSongHandler = (song)=>{
    let songs = songList.filter(value => value !== song)
    setSongList(songs);
  }
  return (
    <>
        <AddMusic onAddSong={addSongHandler} />
        <ListMusic songList={songList} onRemove={removeSongHandler} />
    </>
  )
}

export default App
