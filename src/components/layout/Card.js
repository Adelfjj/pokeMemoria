import { useRef } from "react";
import "./Card.css";


function Card ({handleClick, pokemon}){
    const cardContainer = useRef(null);

    const clickCard = (e) => {
        e.preventDefault();
        handleClick(cardContainer,pokemon.name);
    }
    return(
        <div className="mainContainer" ref={cardContainer}>
            <div className="theCard" onClick={clickCard}>
                <div className="theFront">
                    <p>front</p>
                </div>
                <div className="theBack">
                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
                    <div>
                        <h2>{pokemon.name}</h2>
                        {pokemon.types.length > 0 && 
                            pokemon.types.map((pok,key) => {
                            return <p key={key}>{pok.type.name}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;