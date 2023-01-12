import { useRef } from "react";
import "./Card.css";
import frontCard from "../../img/front.png";

function Card ({handleClick, pokemon}){
    const cardContainer = useRef(null);

    const clickCard = () => {  
        handleClick(cardContainer,pokemon.name);
    }
    return(
        <div className="mainContainer" ref={cardContainer}>
            <div className="theCard" onClick={clickCard}>
                <div className="theFront">
                    <img src={frontCard} alt={pokemon.name}/>
                </div>
                <div className="theBack">
                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
                    <div>
                        <h2>{pokemon.name}</h2>
                        <div> 
                            {pokemon.types.length > 0 && 
                                pokemon.types.map((pok,key) => {
                                    return <p key={key}>{pok.type.name}</p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;