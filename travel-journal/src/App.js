import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import locationData from './data';
function App() {

  const jsxContent = locationData.map(places => (
      <Content {...places}/> //items={places} />
    ));

  return (
    <>
      <Header />
      {jsxContent}
    </>
  );
}

export default App;
