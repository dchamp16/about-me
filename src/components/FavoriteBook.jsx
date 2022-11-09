import React from "react";

const FavoriteBook = () => {
  return (
    <>
      <section className="res-section">
        <h1 className="h1book" id="book">
          My five favorite books
        </h1>
        <ol className="favbooks">
          <li>
            <i>The Stand</i> <a href="#">by Stephen King</a>
          </li>
          <li>
            <i>I, Robot</i> by <a href="#">Isaac Asimov</a>
          </li>
          <li>
            <i>Self-Discipline</i> by <a href="#">John Winter</a>
          </li>
          <li>
            <i>Influence, New and Expanded: The Psychology of Persuasion</i> by
            <a href="#">Dr. Robert Cialdini</a>
          </li>
          <li>
            <i>
              <a href="#">Magpi Magazine</a>
            </i>
          </li>
        </ol>
      </section>
    </>
  );
};

export default FavoriteBook;
