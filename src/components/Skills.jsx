import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <>
      <section className="res-section">
        <h1 className="h1skill" id="h1skill">
          Skills
        </h1>
        <ol className="skill">
          <li>
            <Link
              className="fa-solid fa-computer"
              href="https://en.wikipedia.org/wiki/Operating_system"
            ></Link>
            IOS/Windows
          </li>
          <li>
            <Link
              className="fa-solid fa-file-pdf"
              href="https://en.wikipedia.org/wiki/Adobe_Acrobat"
            ></Link>
            PDF, Bluebeam
          </li>
          <li>
            <Link
              className="fa-brands fa-windows"
              href="https://en.wikipedia.org/wiki/Microsoft_Office"
            ></Link>
            Microsoft (word, excel, PowerPoint)
          </li>
          <li>
            <Link
              className="fa-solid fa-screwdriver-wrench"
              href="https://en.wikipedia.org/wiki/Computer_repair_technician"
            ></Link>
            Computer Technician 50 - 65 wpm
          </li>
          <li>
            <Link
              className="fa-brands fa-java"
              href="https://en.wikipedia.org/wiki/Java_(programming_language)"
            ></Link>
            JAVA - Object Oriented
          </li>
          <li>
            <Link
              className="fa-brands fa-js"
              href="https://en.wikipedia.org/wiki/JavaScript"
            ></Link>
            HTML, CSS, Javascript
          </li>
          <li>
            <Link
              className="fa-brands fa-php"
              href="https://en.wikipedia.org/wiki/PHP"
            ></Link>
            PHP
          </li>
          <li>
            <Link
              className="fa-solid fa-database"
              href="https://en.wikipedia.org/wiki/MySQL"
            ></Link>
            MySQL
          </li>
        </ol>
      </section>
    </>
  );
};

export default Skills;
