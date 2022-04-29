import './genreSelector.css';
import {options, library} from '../../../data/data'
import {useState} from 'react'
function GenreSelector(){
    const [selectedValue, setSelectedValue] = useState('')

    function handleSelectedChange(event){
        setSelectedValue(event.target.value)   
    }
    
    const [generatedSong, setGeneratedSong] = useState([])
        function generate(){
            const length = library.length
            for ( var i=0; i<=length; i++){
                if(selectedValue === library[i]){
                    const genre = library[i]
                    const index = library.indexOf(genre) + 1;
                    const list = library[index]
                    const random = list[Math.floor(Math.random() * list.length)]
                    setGeneratedSong(random)
                }
            }

        }
        
    return(
        <div className="selector-container">
            <div>
                <select name="genres" value={selectedValue} onChange={handleSelectedChange} className="genres">
                    <option defaultValue >Choose the genre here</option>
                    {options.map((option) =>
                        <option value={option.value} key={option.value} >
                            {option.text}
                        </option>
                    )}
                </select>
                <span><button onClick={generate} className="generatebutton">Generate</button></span>
            </div>
            <h1 className='videoTitle'>{generatedSong[1]}</h1>
            
            <div className="player-container">
                <iframe className="player"  src={generatedSong[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default GenreSelector