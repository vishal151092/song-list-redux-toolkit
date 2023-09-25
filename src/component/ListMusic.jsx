import React from 'react'

const ListMusic = ({songList, onRemove}) => {

    const showSongData=(song,i)=>{
        return(
        <div key={i} className='song-list-row'>
            <h3>{song}</h3> <button onClick={()=> removeSong(song)}>X</button>
        </div>
        )
    }

    const removeSong = (song)=>{
        console.log(`remove song: ${song}` )
        onRemove(song);
    }

  return (
    <div>
        {songList.map((song,i)=> showSongData(song,i))}
    </div>
  )
}

export default ListMusic