import React from "react";

const Navbar = ({ setGeneration, changeLanguage, dictionary }) => {
  return (
    <nav>
      <div className="dropdown show">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setGeneration(0)}
        >
          {dictionary.home} {/* Usamos el diccionario */}
        </button>
        <button
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {dictionary.seleccionaGeneracion} {/* Usamos el diccionario */}
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <button className="dropdown-item" onClick={() => setGeneration(1)}>
              Generación 1
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setGeneration(2)}>
              Generación 2
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setGeneration(3)}>
              Generación 3
            </button>
          </li>
        </ul>
        <button
          onClick={() => changeLanguage("es")}
          className="p-2 rounded-full hover:bg-gray-200 mx-1"
        >
          <img src="/spain.png" alt="Español" width={24} height={24} />
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="p-2 rounded-full hover:bg-gray-200 mx-1"
        >
          <img src="/uk.png" alt="Inglés" width={24} height={24} />
        </button>
        <button
          onClick={() => changeLanguage("fr")}
          className="p-2 rounded-full hover:bg-gray-200 mx-1"
        >
          <img src="/france.png" alt="Francés" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
