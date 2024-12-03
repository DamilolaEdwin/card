import picture from './assets/alder.jpg'

function Card2(){

    return(
        <div className="card2">
            <img className="card-image2" src={picture} alt="Leke Alder" />
            <h2 className="card-title2">Leke Alder</h2>
            <p className="card-text2">The big cool uncle. Contemporary Christian.</p>
        </div>
    )
}


export default Card2