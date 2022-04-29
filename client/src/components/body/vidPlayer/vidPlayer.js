import './vidPlayer.css'

function VidPlayer(){
    return(
    <div>
        <form>
        <h4>lists<span><i className="fas fa-times-circle"></i></span></h4>
		<div className="form-control" >
            <input
                id="listName"
                type="text"
                name="listName"
                className="list-input"
                placeholder="Make a new list..."
            />
            <button type="submit" className="btn submit-btn">submit</button>
            </div>
            <div className="form-alert"></div>
            <section className="lists-container">
                <p className="loading-text">Loading...</p>
                <div className="lists"></div>
            </section>		 
        </form>
    </div>
    )
}

export default VidPlayer