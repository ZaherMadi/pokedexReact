
import Logo from "./Logo/Logo"
import LangageSelection from "./LangageSelection/LangageSelection"
import './Header.css'
function Header(){
    return(

    <div className="flexbox">

       <div><Logo/></div>
       <div className="right"><LangageSelection /></div>




    </div>
    )
}

export default Header