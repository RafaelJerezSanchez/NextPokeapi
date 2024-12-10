  import { useState, useEffect } from "react";
  import { Modal, Button } from "react-bootstrap";

  const RandomPokemons = ({ generation }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const fetchRandomPokemons = async () => {
      let min, max;

      if (generation === 0) {
        min = 1;
        max = 1000;
      } else if (generation === 1) {
        min = 1;
        max = 151;
      } else if (generation === 2) {
        min = 152;
        max = 251;
      } else if (generation === 3) {
        min = 252;
        max = 386;
      }

      const getRandomId = () => Math.floor(Math.random() * (max - min + 1)) + min;

      const randomIds = Array.from({ length: generation === 0 ? 1 : 10 }, getRandomId);

      const pokemonData = await Promise.all(
        randomIds.map(async (id) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await response.json();
          return {
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
          };
        })
      );

      setPokemonList(pokemonData);
      setLoading(false);
    };

    useEffect(() => {
      setLoading(true);
      fetchRandomPokemons();
    }, [generation]); 

    const handleShowModal = (pokemon) => {
      setSelectedPokemon(pokemon); 
      setShowModal(true); 
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedPokemon(null); 
    };

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {pokemonList.map((pokemon) => (
            <div
              key={pokemon.id}
              style={{
                border: "1px solid black",
                padding: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <h4>{pokemon.name} (# {pokemon.id})</h4>
              <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%" }} />
              <button
                onClick={() => handleShowModal(pokemon)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Saber más
              </button>
            </div>
          ))}
        </div>

      
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPokemon?.name} (# {selectedPokemon?.id})</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ textAlign: "center" }}>
              <img
                src={selectedPokemon?.image}
                alt={selectedPokemon?.name}
                style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
              />
              <p style={{ color: "black", fontSize:30 }}>{selectedPokemon?.name}</p>
              <p style={{ color: "black" }}>HP: {selectedPokemon?.hp}</p>
              <p style={{ color: "black" }}>Ataque: {selectedPokemon?.attack}</p>
              <p style={{ color: "black" }}>Defensa: {selectedPokemon?.defense}</p>
              <p style={{ color: "black" }}>Velocidad: {selectedPokemon?.speed}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  export default RandomPokemons;
