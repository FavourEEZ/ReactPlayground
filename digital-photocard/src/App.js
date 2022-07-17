import photo from './profilePicture.jpg';
import './App.css';
import Button from '@mui/material/Button';
import email from "./assets/Email-Icon.png";

export default function App() {
  return (
    <div className="App">
      <img src={photo} className="App-logo" alt="logo" />
      <div className="div-info">
        <h1 className='remove-line-height'>Favour O.</h1>
        <h3 className='remove-line-height' id="role"> Full Stack Engineer </h3>
        <a href="https://reactjs.org" className="App-link remove-line-height">
          favour.ai
        </a>
        <div className='btn-holder'>
          <button> 
            <img src={email}/>
            Email 
          </button>
          <Button variant='contained'> Linkedin </Button>
        </div>
      </div>

    </div>
  );
}
