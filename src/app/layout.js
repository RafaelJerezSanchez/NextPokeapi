'use client'

import { useState } from "react";
import localFont from "next/font/local";
import Navbar from "@/componentes/Nav";
import RandomPokemons from "../componentes/Generaciones";
import { getDictionary } from "../componentes/diccionario";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";

// Cargamos las fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [generation, setGeneration] = useState(1);
  const [language, setLanguage] = useState("en");
  const dictionary = getDictionary(language);

  return (
    <html lang={language}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <h1>{dictionary.title}</h1>
        <p>{dictionary.description}</p>

        <Navbar
          setGeneration={setGeneration}
          changeLanguage={setLanguage}
          dictionary={dictionary}
        />

        {/* Renderizamos el título según la generación */}
        <h2>
          {generation === 0
            ? dictionary.pokemonAleatorio || "Pokémon Aleatorio"
            : `${dictionary.generacion || "Pokemons de la Generación"} ${generation}`}
        </h2>

        <RandomPokemons generation={generation} />

        {children}
      </body>
    </html>
  );
}
