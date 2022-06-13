import MovieCard from './MovieCard';
import movies from './MovieDatabase';

const RenderCards = () => {

    return (
        <div className="cards">
            {movies.map((elt, i) =>
                <MovieCard
                    key={i}
                    title={elt.title}
                    year={elt.year}
                    director={elt.director}
                    duration={elt.duration}
                    rate={elt.rate}
                    genre={elt.genre}
                />
            )}
        </div>
    );
}

export default RenderCards;