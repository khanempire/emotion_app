import react,{useState} from 'react';
import  "./App.css";

function App() {

  const emotionDictionary={
    "🏕️":"Camping",
    "🏖️":"Beach with umbrella",
    "🏝️":"Desert Island",
    "🗻":"Mountain Fuji",
    "🏔️":"Snow capped mountain",
    "🏞️":"National Park"
  }

  const emotionWeKnow=Object.keys(emotionDictionary);

  const [travel, setTravel] = useState("");

  const inputHandler= (event) => {
     const value=event.target.value;
     const meaning=emotionDictionary[value];
     setTravel(meaning);
  }

  const emotionClickHandler= (emotion) =>{
    const meaning=emotionDictionary[emotion];
    setTravel(meaning);
  }
  return (
      <div>
          <h1>Find your Emotion with travel and places</h1>
          <input  onChange={inputHandler}/>
          <h2 className="emotionMeaning">{travel}</h2>
          <h2>Travel and places sign we know</h2>
          {
            emotionWeKnow.map((emotion)=>{
               return <span
                onClick={()=>emotionClickHandler(emotion)}
                 key={emotion}>
                 {emotion}
                 </span>
          })
          }

      </div>    
  );
}

export default App;
