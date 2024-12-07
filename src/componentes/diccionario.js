const dictionaries = {
  en: {
    title: "Welcome to my multilingual page",
    description: "This is a simple page that can be translated into Spanish, English and French.",
    home: "Home",
    seleccionaGeneracion: "Select Generation",
    pokemonAleatorio: "Random Pokémon",
    generacion: "Pokemon of the Generation",
  },
  es: {
    title: "Bienvenido a mi página multilingüe",
    description: "Esta es una página sencilla que se puede traducir al español, al inglés y al francés.",
    home: "Inicio",
    seleccionaGeneracion: "Selecciona Generación",
    pokemonAleatorio: "Pokémon Aleatorio",
    generacion: "Pokemons de la Generación",
  },
  fr: {
    title: "Bienvenue sur ma page multilingue",
    description: "Ceci est une page simple qui peut être traduite en espagnol, anglais et français.",
    home: "Maison",
    seleccionaGeneracion: "Sélectionnez Génération",
    pokemonAleatorio: "Pokémon Aléatoire",
    generacion: "Génération Pokémon",
  },
};

export const getDictionary = (lang) => dictionaries[lang];
