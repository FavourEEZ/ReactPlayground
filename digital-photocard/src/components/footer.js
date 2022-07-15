import "../App.css"
import Button from '@mui/material/Button';
import facebook from "../assets/Facebook-Icon.png"
import github from "../assets/GitHub-Icon.png"
import instagram from "../assets/Instagram-Icon.png"
import twitter from "../assets/Twitter-Icon.png"


export default function Footer(){
    return (
    <div className="App">
       <div className="icon-holder div-info">
            <img src={facebook} />
            <img src={github} />
            <img src={instagram} />
            <img src={twitter} />
       </div>
    </div>
    )
}
