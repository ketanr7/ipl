import './App.css';
import {BrowserRouter as Router,  Routes,Route,} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/header';
import PlayersList from './Components/PlayersList';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
  <Route exact path="/" element={<Home />} />
    <Route path="playersList" element={<PlayersList />} />

  
</Routes>
</Router>
    
  );
}

export default App;
