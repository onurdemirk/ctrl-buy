import React from "react";
import { NavLink, useOutletContext,useParams } from "react-router-dom";
import styles from "../css-modules/games.module.css";
import { endpoints } from "../../endpoints"
import Loading from "../pages/Loading"
import Error from "../pages/Error"

import { FaXbox } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";


export default function Games() {
  
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [games, setGames] = React.useState([]);

  const { addCart, cartItems } = useOutletContext();

  const { categoryName } = useParams();
  const selectedCategory = categoryName 
  ? endpoints.find(e => e.id === categoryName) 
  : endpoints.find(e => e.id === "main") 

  const getRandomPrice = () => {
    const min = 5;
    const max = 70;

    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    return (randomInt + 0.99).toFixed(2);
  };

  React.useEffect(() => {
    fetch(selectedCategory.url)
      .then((res) => res.json())
      .then((data) => {
        const gamesWithPrice = data.results.map((game) => ({
          ...game,
          price: getRandomPrice(),
        }));
        setGames(gamesWithPrice);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <h3 className={styles.gamesTitle}>{categoryName ? selectedCategory.text : "Games" }</h3>
      <div className={styles.gameContainer}>
        {games.map((game) => (
            <div key={game.id} className={styles.game}>
            <NavLink
            to={`/game/${game.id}`}
            state={{ price: game.price }}
            style={{ textDecoration: "none" }}
          >
              <div className={styles.gameImageContainer}>
                <img src={game.background_image} alt={game.slug} />
              </div>
              </NavLink>
              <div className={styles.addCartPrice}>
                {!cartItems.some(item => item.gameId === game.id) ?
                  <p className={styles.addCart}
                    onClick={() => addCart(
                      game.id,
                      game.name,
                      game.price,
                      game.background_image
                    )}
                  >
                    Add to Cart +
                  </p>:
                  <p className={styles.addedCart}>Added <span><FaCheck /></span></p>
                }
                <p>{game.price} $</p>
              </div>
              <div className={styles.platforms}>
                {game.platforms.map(({ platform }) => {
                  if (platform.id === 186) {
                    return (
                      <div key={platform.id}>
                        <FaXbox />
                      </div>
                    );
                  } else if (platform.id === 4) {
                    return (
                      <div key={platform.id}>
                        <FaWindows />
                      </div>
                    );
                  } else if (platform.id === 187) {
                    return (
                      <div key={platform.id}>
                        <FaPlaystation />
                      </div>
                    );
                  } else if (platform.id === 5) {
                    return (
                      <div key={platform.id}>
                        <FaApple />
                      </div>
                    );
                  } else if (platform.id === 7) {
                    return (
                      <div key={platform.id}>
                        <BsNintendoSwitch />
                      </div>
                    );
                  }
                })}
              </div>
              <NavLink
            to={`/game/${game.id}`}
            state={{ price: game.price }}
            style={{ textDecoration: "none" }}
          >
              <div>
                <h3 className={styles.gameName}>{game.name}</h3>
              </div>
              </NavLink>
            </div>
        ))}
      </div>
    </>
  );

}
