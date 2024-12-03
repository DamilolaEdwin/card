import profilePic from './assets/profile.jpg'

function Card(){

    return(

        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Eddy</h2>
            <p className="card-text">Building is the fastest way to gain mastery.</p>
        </div>

    );


}

export default Card