import './GamingLibrary.css'
import {SectionHeader,SectionWrapper , GamingCard} from '../../index'
import gamingItem from '../../../Data/GamingLibraryData'



const GamingLibrary = () => {
    const gamingCard = gamingItem.map( (card ,index) => {
        return <GamingCard key={card.id} image={card.image} title={card.title} catogry={card.catogry} date={card.date} hours={card.hours} currently={card.currently} download={card.download}/>
    })

    return (
    <SectionWrapper>
        <SectionHeader>
            Your Gaming
        </SectionHeader>
        <div className='gaming-cards'>
            {gamingCard}
        </div>
        
        </SectionWrapper>
    )
}

export default GamingLibrary
