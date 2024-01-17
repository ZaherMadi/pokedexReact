
import Logo from "./Logo/Logo"
import React from "react"
import LangageSelection from "./LangageSelection/LangageSelection"
import './Header.css'
function Header(){

const [values,setvalues] = React.useState("fr")

    return(

    <div className="flexbox">

       <div><Logo/></div>
       <div className="right">                <LangageSelection LanguageSelected={values} setLanguage={setvalues} />
</div>




    </div>
    )
}

export default Header