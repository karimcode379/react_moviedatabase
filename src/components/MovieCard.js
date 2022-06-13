const MovieCard = props => {
    return (
        <div className="moviecard">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <div className="genres">{props.genre.map((x) => <p>{x}</p>)}</div>
        </div>
    );
}

export default MovieCard;