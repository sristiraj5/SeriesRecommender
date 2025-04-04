import styles from "./cards.module.css";
import styled from "styled-components";

export const List = ({ data }) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = data;


        const ButtonSc = styled.button `
            background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f" };      
            padding: 1rem 2rem;
            border : none;
            font-Size: 1rem;
            color : var(--btn-color);
            font-Weight: bold;
            cursor: pointer;`
        
            const Rating = styled.h3 `
            font-Size: 1rem;
            color :rgb(6, 4, 141) ;
            text-transform : capitalize;
            `;
    
    const ratingClass = rating >= 8.5 ?  styles.super_hit : styles.average;
    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width="60%" height="60%" />
            </div>
            {/* <div className= {styles["card-content"]}> */}
            <div className="flex flex-col gap-6 py-[2.1rem] px-[1.2rem]">
            <h2> {name}</h2>
            <Rating>Rating: <span className= {`${styles.rating} ${ratingClass}`}>{rating}</span> </Rating>
            <p className = "font-bold text-xl text-black">Summary: {description}</p>
            <p>Cast: {cast.join(", ")} </p>
            <p>Genre: {genre.join(", ")} </p>
            <a href={watch_url} target="_blank" >
                {/* <button style={btn_style}>Watch now</button> */}
                <ButtonSc rating = {rating}>Watch now</ButtonSc>
                </a>
            </div>
        </li>
    );
};
