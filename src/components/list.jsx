

export const List = ({ data }) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f" }`,
            padding: "1rem 2rem",
            border : "none",
            fontSize: "1rem",
            color : "var(--btn-color)",
            fontWeight: "bold",
            cursor: "pointer",
            
    };
    const ratingClass = rating >= 8.5 ?  "super_hit" : "average";
    return (
        <li className="card">
            <div>
                <img src={img_url} alt={name} width="100%" height="60%" />
            </div>
            <div className="card-content">
            <h2>Name : {name}</h2>
            <h3>Rating: <span className= {`rating ${ratingClass}`}>{rating}</span> </h3>
            <p>Summary: {description}</p>
            <p>Cast: {cast.join(", ")} </p>
            <p>Genre: {genre.join(", ")} </p>
            <a href={watch_url} target="_blank" ><button style={btn_style}>Watch now</button></a>
            </div>
        </li>
    );
};
