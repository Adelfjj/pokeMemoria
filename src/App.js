import { useState,useEffect} from "react";
import Card from "./components/layout/Card";

function App() {

  const [pokemons,setPokemons] = useState([]);

 useEffect(() => {
   const urls = getRandomIntInclusive();
   const fetchData = async () => {
    try {
     var response = await Promise.all(
       urls.map(url => fetch(url)
        .then(res => res.json()))
        )
    } catch (error){
      console.log("Error",error)
    }
    response.push(...response);
    setPokemons(shuffleArray(response));
  }
  fetchData();
  },[])
  
  const shuffleArray = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  const handleClick =(cardContainer) =>{
    cardContainer.current.firstChild.classList.toggle("flip");
  }

  const getRandomIntInclusive = () => {
    const numPokemons = 139;
    const result = Math.floor(Math.random() * numPokemons) + 1;

    var endpoints =[];

    for(let i=result;i<result+6;i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    return endpoints;
  }

  console.log(pokemons)

  return (
    <div className="app">
      <header className="appHeader">
       <h1>Jogo da memória POKEMON</h1>
      </header>
      <main>
        <section>
          {pokemons.length > 0 &&
            pokemons.map((pokemon,key) => 
             <Card handleClick={handleClick}
             pokemon={pokemon} key={key}/> 
            )
          }
        </section>
      </main>
    </div>
  );
}

export default App;
