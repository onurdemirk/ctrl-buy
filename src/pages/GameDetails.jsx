import React from "react";
import { useParams, useLocation, useOutletContext, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBack } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import { motion } from "motion/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../css-modules/game-details.module.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function GameDetails() {
  const routeParams = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  const [gameDetails, setGameDetails] = React.useState([]);
  const [gameScreenshots, setGameScreenshots] = React.useState([]);

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const location = useLocation();
  const price = location.state?.price;

  const { addCart, cartItems } = useOutletContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${routeParams.id}?key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setGameDetails(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [routeParams.id]);

  React.useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${routeParams.id}/screenshots?key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setGameScreenshots(data.results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [routeParams.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.firstDetails}>
          <div className={styles.back} onClick={() => navigate(-1)}>
            <IoArrowBack />
            <p>Back</p>
          </div>
          <p className={styles.gameName}>{gameDetails.name}</p>
        </div>
        <div className={styles.secondDetails}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={styles.swiper}
          >
            <SwiperSlide>
              <img
                className={styles.img}
                src={gameDetails.background_image}
                alt={gameDetails.slug}
              />
            </SwiperSlide>
            {gameScreenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.id}>
                <img
                  className={styles.img}
                  src={screenshot.image}
                  alt={`Screenshot ${screenshot.id}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          </motion.div>
          <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          >
          <div>
            <div className={styles.description}>
              <h3>Description</h3>
              <div
                className={styles.descText}
                dangerouslySetInnerHTML={{
                  __html: (gameDetails.description || "").split(
                    "<p>Español"
                  )[0],
                }}
              />
            </div>
            <div className={styles.priceBlock}>
              <p>${price}</p>
              {!cartItems.some((item) => item.gameId === routeParams.id) ? (
                <p
                  onClick={() =>
                    addCart(
                      routeParams.id,
                      gameDetails.name,
                      price,
                      gameDetails.background_image
                    )
                  }
                  className={styles.cart}
                >
                  Add to cart +
                </p>
              ) : (
                <p className={styles.addedCart}>
                  Added{" "}
                  <span>
                    <FaCheck />
                  </span>
                </p>
              )}
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
