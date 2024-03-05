import './Most.css'
import {Card,SectionHeader,SectionWrapper} from '../../index'
import mostPopularItem from '../../../Data/MostPopularData'
const Most = () => {


  const cards = mostPopularItem.map( (card)=> {
    return <Card key={card.id} image={card.image} title={card.title} catogry={card.catogry} rate={card.rate} download={card.download}/>
  })
  return (
    <SectionWrapper>
      <SectionHeader>
        Most Popular
      </SectionHeader>
      <div className='most-items'>
        {cards}
      </div>
    </SectionWrapper>
  )
}

export default Most
