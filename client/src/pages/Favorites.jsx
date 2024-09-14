import React from "react";
import { useFavoriteContext } from "../context/Favorites";
import CardProduct from "../components/CardProduct";
import PaginatedComponent from "../components/PaginatedComponent";
import styles from "../css/containerProducts.module.css";
import styleTitle from "../css/title.module.css";
import EmptyComponent from "../components/EmptyComponent";

const Favorites = () => {
    const { favorite } = useFavoriteContext();
    const text = 'Para ver tus productos favoritos, simplemente selecciona los que más te gusten haciendo clic en el botón con el ícono de corazón que aparece en cada producto. Una vez seleccionado, los productos aparecerán aquí para que puedas acceder a ellos fácilmente en cualquier momento. ¡Elige tus favoritos y disfrútalos cuando quieras!' ;

    return (
        <div>
            <h1 className={styleTitle.title}>Favoritos</h1>
            {favorite.length === 0 ? (
                <EmptyComponent text={text} />
            ) : (
                <PaginatedComponent
                    items={favorite} // Los productos a paginar
                    itemsPerPage={6} // Cantidad de productos por página
                    render={(currentProducts) => (
                        <div className={styles.cardsWrapper}>
                            {currentProducts.map((item) => (
                                <div
                                    key={item._id}
                                    className={styles.cardsContainer}
                                >
                                    <CardProduct item={item} />
                                </div>
                            ))}
                        </div>
                    )}
                />
            )}
        </div>
    );
};

export default Favorites;
