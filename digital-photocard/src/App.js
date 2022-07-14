import photo from './profilePicture.jpg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <img src={photo} className="App-logo" alt="logo" />
      <div className="div-info">
        <h1>Favour Omoragbon</h1>
        <h3 id="role"> Full Stack Engineer </h3>
        <a href="https://reactjs.org" className="App-link">
          favour.ai
        </a>
        <div className='btn-holder'>
          <Button variant='contained' size='large'> Linkedin </Button> {/**style={{backgroundColor: "white"}} />**/}
          <Button variant='contained' size='large'> Email </Button> {/**style={{backgroundColor: "white"}} />**/}
        </div>
      </div>

    </div>
  );
}

export default App;
