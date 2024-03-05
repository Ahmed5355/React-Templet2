import './Card.css'
import { FaStar,FaDownload } from "react-icons/fa6";
const Card = (props) => {
  return (
    <div className='most-item'>
    <div className='most-card'>
      <img className='card-image'src={props.image} alt=''/>
      <div className='card-content'>
        <h4 className='card-content-title'>
          {props.title}<br />
          <span>{props.catogry}</span>
        </h4>
        <ul>
          <li><FaStar  style={{"color":'yellow'}}/><span>{props.rate}</span></li>
          <li><FaDownload  style={{"color":'var(--color-primary)'}} /><span>{props.download}</span></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Card
