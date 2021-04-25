import { useState, useEffect } from "react";
import axios from "axios";

import Matchinfo from './components/Matchinfo'
import Players from './components/Players'


function App() {
  const [teamName, setTeamName] = useState(["Not set"]);
  const [match,setMatch] = useState([])
  const [players, setPlayers] = useState([])
  //let matchArr = 
  
  const handleClick = (e) => {
    e.preventDefault();
    const fetchMatch = async () => {
      const datajson = await axios.get("/api/choosematch");
      const dataobj = JSON.parse(JSON.stringify(datajson.data));
      console.log("Full data obj",dataobj)
      setMatch(dataobj[0])
      setPlayers(dataobj[1])
      //console.log("Match Obj:",dataobj[0].innings[0].);
      // const firstInnings = dataobj[0].innings[0]['1st innings']['deliveries']
      // const secondInnings = dataobj[0].innings[1]
      //cons
      //setMatch(dataobj);
      //setTeamName(dataobj[0].name);
    };
    fetchMatch();
  };
  return (
    <div className="App">
      <h1>The teams are:</h1>
      <h4>{teamName}</h4>
      <button onClick={handleClick}>Choose a Match</button>
      <Matchinfo match = {match}/>
      <Players players={players}/>
      
    </div>
  );
}

export default App;
