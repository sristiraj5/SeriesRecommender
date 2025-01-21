import React from "react";
import seriesData from "../api/seriesData.json";
import { List } from "./list";
import "./cards.css";

export const Netflixseries = () => {
    return (
        <ul className ="grid grid-three-cols">
            {seriesData.map((curElem) => (
                <List key={curElem.id} data={curElem} />
            ))}
        </ul>
    );
};
