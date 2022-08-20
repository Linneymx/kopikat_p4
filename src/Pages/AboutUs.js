import React from "react";
import { Link } from "react-router-dom";
import TopImg from "../Assets/topIMG.jpg";
import "../Styles/AboutUs.css";


function AboutUs() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${TopImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Our History</h1>
        <p>
        El primer café para gatos del mundo, "Cat Flower Garden" (貓 花園[3] ), abrió en Taipei , Taiwán , en 1998 y finalmente se convirtió en un destino turístico mundial. [4] [5] El concepto floreció en Japón, [4] donde el primero llamado "Neko no Jikan" (literalmente "Cat's Time") se abrió en Osaka en 2004. [3] Debido al tamaño de la tierra y la población de Japón , muchos residentes viven en pequeños apartamentos o condominios que no admiten mascotas, lo que hace que un café para gatos sea un destino muy popular para los trabajadores jóvenes que buscan la compañía y la comodidad que ofrece. El primer café para gatos de Tokio, llamado "Neko no mise" (Tienda de gatos), abrió en 2005. Después de esto, la popularidad de los cafés para gatos se disparó en Japón. De 2005 a 2010, se abrieron setenta y nueve cafés para gatos en todo el país.
        </p>
        <Link to="/menu">
          <button> Look our Menu</button>
        </Link>
      </div>
      <Link to="/menu">
          <button> Look our Menu</button>
        </Link>
    </div>
  );
}

export default AboutUs;