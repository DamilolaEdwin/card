import profilePic from './assets/profile.jpg'

function Card(){

    return(

        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Eddy</h2>
            <p className="card-text">I speak the language of the web and love reading.</p>
        </div>

    );


}

export default Card