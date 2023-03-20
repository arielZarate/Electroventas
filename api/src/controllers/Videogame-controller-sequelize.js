const { getAllGames, getGamesById_Api } = require("../services/getInfoApi");
const Videogames = require("../models/Videogames-model.js");
const Genres = require("../models/Genres-model.js");
const { all } = require("axios");

//=======ById========================================================================
/* 
📍 GET | /videogames/:idVideogame
Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.

*/
const videogameById = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id) === false) {
      //si da false es que es tipo numerico
      let num = parseInt(id);
      // console.log("ES NUMERICO", num);

      const game_id_pi = await getGamesById_Api(num);

      game_id_pi
        ? res.json(game_id_pi)
        : res.status(400).json("There are no games with that id in the API");
    } else {
      //es un uuid o string
      //buscxamos en la BD

      //============de la BD==============================
      const game_id = await Videogames.findByPk(id, {
        include: {
          model: Genres,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
        },
      });

      game_id
        ? res.json(game_id)
        : res.status(400).json("There are no games with that id in the db");

      //=============================================
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//==================================================================
/* 
📍 GET | /videogames
Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

📍 GET | /videogames/name?="..."
Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el videojuego, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.

 */

const getVideogames = async (req, res) => {
  try {
    const { name } = req.query;
    let allGames = await getAllGames();

    console.log(allGames);

    /*     if (!name) {
      allGames
        ? res.json(allGames)
        : res.status(404).json({ message: "Videogame not Found 😕" });
    } else {
      //FILTRA Y OBLIGADAMENTE LOS DEBE PASAR A MINUSUCLAS PARA PODER COMPARAR HACIENDO QUE IGNORE SI ELLA MAYUSCULAS /MISUCULAS
      let searchGame = allGames.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );

      searchGame.length
        ? res.status(200).json(searchGame)
        : res.status(404).json({
            message: "Videogame not Found 😕",
          });
    } */
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
//================================================================================================================
/* 📍 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados 
(al menos uno). */

const createVideogames = async (req, res) => {
  try {
    let { name, description, image, platforms, released, rating, genres } =
      req.body;

    /*  console.log(req.body); */
    //console.log(name, description, image, platforms, released, rating, genres);
    let newGame = await Videogames.create({
      name,
      image,
      description,
      platforms: [platforms],
      released,
      rating: parseInt(rating) || 1,
      //tengo un array de generos por id
      genres: [genres], //lo agregue aca
      //  genreId: [genreId],
      createdInDb: true,
    });

    //===================================================================

    //busco el genero
    /*   let genre = await Genres.findAll({
        where: {
          name: genres,
        },
      });
     */

    //newGame.addGenre(genres);
    //console.log(newGame);
    newGame
      ? res.status(200).send("Videogame created successfully 👌")
      : res.status(404).json("Videogame not created ☹ ");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//===================CONTROLADORES AGREGADOS  CRUD COMPLETO=========================================================

/* 

opcion 2
const postUpdate = async (req, res) => {
  const { id } = req.params;
  //const { title, body, userId } = req.body;
  try {
    if (!id) {
      throw new Error("el id esta vacio o undefined");
    } else {
      const data = await Posts.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      return res.json(data);
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};  */
const updateVideogames = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const videogame = await Videogames.findByPk(id);
      if (!videogame) {
        throw new Error("Videogame  not found");
      } else {
        let { name, description, image, platforms, released, rating, genres } =
          req.body;

        if (
          !name ||
          !description ||
          !image ||
          !platforms ||
          !released ||
          !rating ||
          !genres
        ) {
          throw new Error("undefined parameter, check 😬");
        } else {
          //actualizo con lo pasado en parametros
          if (name) videogame.name = name;
          if (description) videogame.description = description;
          if (image) videogame.image = image;
          if (platforms) videogame.platforms = [platforms];
          if (released) videogame.released = released;
          if (rating) videogame.rating = rating;
          if (genres) videogame.genres = [genres];

          await videogame.save();
          res.json(videogame);
        }
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteVideogames = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const videogame = await Videogames.destroy(
        {
          where: { id: id },
        },
        {
          // paranoid: true,
          force: true,
        }
      );
      //  console.log(post);
      return res.json("The videogame has been removed");
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getVideogames,
  videogameById,
  createVideogames,
  updateVideogames,
  deleteVideogames,
};
