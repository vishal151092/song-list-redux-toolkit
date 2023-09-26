import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSong } from '../store/slices/songSlice';

//{songList, onRemove}
const ListMusic = () => {

    const dispatch = useDispatch();
    const songs = useSelector(store => store.songs);

    const showSongData=(song,i)=>{
        return(
        <div key={i} className='song-list-row'>
            <h3>{song}</h3> <button onClick={()=> remove(song)}>X</button>
        </div>
        )
    }

    const remove= (song)=>{
        console.log(`remove song: ${song}` )
        //onRemove(song);
        dispatch(removeSong(song))
    }

  return (
    <div>
        {songs.map((song,i)=> showSongData(song,i))}
    </div>
  )
}

export default ListMusic