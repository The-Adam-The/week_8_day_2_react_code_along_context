import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

const AddScoreForm = () => {

  const [inputScore, setInputScore] = useState("");
  const[inputGame, setInputGame] = useState("");


  const {user, setUser} = useContext(UserContext)

  const handleInputGame = (event) => {
      setInputGame(event.target.value);
  }

  const handleInputScore = (event) => {
    setInputScore(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newScore = {};
    newScore[inputGame] = inputScore;
    const temp = {...user};
    temp.scores.push(newScore);
    setUser(temp);
  }
  
  return (
  <div>
    <form onSubmit={handleFormSubmit}>
        <label htmlFor='game'>Game:</label>
        <input type="text" id="game" value={inputGame} onChange={handleInputGame} required/>
        <label htmlFor='score'>Score:</label>
        <input type="number" id="score" value={inputScore} onChange={handleInputScore}required/>
        <input type="submit" value="Save" />
    </form>
  </div>
  );
}

export default AddScoreForm