import './GamingCard.css'
import { SecandryButton } from '../index'
const GamingCard = (props) => {
    return (
        <div className='gaming-card'>
            <img src={props.image} alt=''/>
            <h4>{props.title} <br /> <span>{props.catogry}</span> </h4>
            <h4>Date Added <br /> <span >{props.date}</span> </h4>
            <h4>Hours Played <br /> <span>{props.hours}</span> </h4>
            <h4>Currently <br /> <span >{props.currently}</span> </h4>
            <SecandryButton>{props.download}</SecandryButton>

        </div>

    )
}

export default GamingCard
