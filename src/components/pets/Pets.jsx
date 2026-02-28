import './Pets.css';
import ghost from '../../accets/pets/gostdog.png'
import dogwball from '../../accets/pets/dogwball.png'
import dogwithball from '../../accets/pets/dogwithball.png'
import cattalking from '../../accets/pets/cattalking.png'

function Pets() {
    return (
        <div className='pets'>
            <p className="pets-title">Interacting with our pets</p>
            <div className="pets-box">
                <div className="pets-news">
                    <img src={ghost} className='pets-news-picutre' alt="" />
                    <p className="pets-news-headline">Rescue pups pose as ghosts in festive photo shoot</p>
                </div>
                <div className="pets-news">
                    <img src={dogwball} className='pets-news-picutre' alt="" />
                    <p className="pets-news-headline">Rescuew pups pose as ghosts in festive photo shoot</p>
                </div>
                <div className="pets-news">
                    <img src={dogwithball} className='pets-news-picutre' alt="" />
                    <p className="pets-news-headline">Rescuew pups pose as ghosts in festive photo shoot</p>
                </div>
                <div className="pets-news">
                    <img src={cattalking} className='pets-news-picutre' alt="" />
                    <p className="pets-news-headline">Rescuew pups pose as ghosts in festive photo shoot</p>
                </div>
            </div>
            <button className="pets-more">See more</button>
        </div>
    )
}

export default Pets
