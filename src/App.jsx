import axios from "axios";
import { useState } from "react";


function App(){


  const[joke, setJoke] = useState({});

  async function getjoke(){
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any")
    
    setJoke(response.data);

  }
  return <div className="joke-conainer">
    <h1>Joke App</h1>
    <button onClick={getjoke}>Get button</button>
    <div>
      {
        joke.type=="single"? <h2>{joke.joke}</h2> : <div>
          <h2>{joke.setup}</h2>
          <h2>{joke.delivery}</h2> 
        </div>

      }
    </div>

  </div>
}
export default App;