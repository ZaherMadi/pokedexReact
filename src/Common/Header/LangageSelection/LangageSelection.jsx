import ParamPhoto from "./param.png"
function LangageSelection({LanguageSelected, setLanguage}){


    function ChangeLanguage(LanguageSelected, setLanguage){
        return(
            <select value={LanguageSelected} onChange={setLanguage}>
            <option value="fr">🇫🇷</option>
            <option value="en">En/🇺🇸</option>
            <option value="de">de</option>
            <option value="es">🇪🇸</option>
            <option value="ja">ja</option>
          </select>

        )

    }
    return (
        <a href="#" onClick={ChangeLanguage()}> <img src={ParamPhoto} alt="param" width={80}/></a>
    )
}

export default LangageSelection