import React from "react";
import { Netflixseries } from "./components/cards";
import "./components/cards.css";

export const App = () => {
    return (
        <section className="container">
            <h1 className="card-heading">List of Best Netflix Series</h1>
            <Netflixseries />
        </section>
    );
};
