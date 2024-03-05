import './Navitem.css'
const Navitem = (props) => {
  return (
    <li className="nav-item">{props.children}</li>
  )
}
export const NavitemDropdown = (props) => {
  return (
    <li className="nav-item dropdown" >{props.children}</li>
  )
}

export default Navitem
