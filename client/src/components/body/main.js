import GenreSelector from './genreSelector/genreSelector'
import VidPlayer from './vidPlayer/vidPlayer'
import './main.css'
function Main(){
    return(
        <div className='main'>
            <GenreSelector/>
            <VidPlayer/>
        </div>
    )
}

export default Main