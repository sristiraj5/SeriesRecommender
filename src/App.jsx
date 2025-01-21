import React from "react";
import { Netflixseries } from "./components/cards";
// import "./components/cards.css";
   import "./components/cards.module.css";
export const App = () => {
    return (
        <section className="container">
            <h1 className="card-heading">List of Best Netflix Series</h1>
            <Netflixseries />
        </section>
    );
};
