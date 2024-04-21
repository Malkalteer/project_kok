import data from '../spotify_data.history.json'

function Top20SongsArtists(props) {
    let songs = [];
    data.map(elem => elem.master_metadata_album_artist_name === props.name ? songs.push(elem.master_metadata_track_name): null )
    songs.sort()
    return (
        <div>   
            
        </div>
    )
}

export default Top20SongsArtists
