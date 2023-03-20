


//CRUD API MASCOTAS

const create = async (req, res) => {
  try {
    let { name, color, peso, age, description } = req.body;

    /*  console.log(req.body); */

    /* 
     otra opcion para eliminar
    const mascotaDB = new Mascota(body)
        await mascotaDB.save()
        res.redirect('/mascotas')
  */

   /*  let newMascota = await Mascota.create({
      name,
      color,
      peso: parseInt(peso),
      age: parseInt(age) || 0,
      description,
    });

    newMascota
      ? res.status(200).send("Pet created successfully 👌")
      : res.status(404).json("Pet not created ☹ "); */
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const get = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
   /*  const mascotas = Mascota.find();

    mascotas
      ? res.json(mascotas)
      : res.status(404).json({ message: "Pet not Found 😕" }); */

    /*     if (!name) {
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
/* 
const mascotaById = async (req, res) => {
  try {
    const { id } = req.params;

    //============de la BD==============================
    const mascotaById = await Mascota.findById({ _id: id });

    mascotaById
      ? res.json(mascotaById)
      : res.status(400).json("There are no pets with that id in the db");

    //=============================================
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteMascota = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });

      if (!mascotaDB) {
        return res.json({
          estado: false,
          mensaje: "could not delete",
        });
      } else {
        return res.json({
          estado: true,
          mensaje: "The pet has been removed",
        });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateMascota = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const mascotaDB = await Mascota.findByIdAndUpdate(id, body);
      //console.log(mascotaDB);
      res.json({
        estado: true,
        mensaje: "modified pet",
      });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}; */

module.exports = {
  /* createMascota,
  getMascotas,
  mascotaById,
  deleteMascota,
  updateMascota, */
};
