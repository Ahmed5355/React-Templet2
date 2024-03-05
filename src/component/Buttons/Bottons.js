import './Bottons.css'

const PrimaryButton = (props) => {
  return (
    <div className=' button primary-button'>
    <a href='/#'>{props.children}</a>
</div>
  )
}
const SecandryButton = (props) => {
  return (
    <div className=' button secandary-button'>
    <a href='/#'>{props.children}</a>
    </div>
  )
}

export default PrimaryButton
export {SecandryButton}
