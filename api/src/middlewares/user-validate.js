const validateUser=(req,res,next)=>{
     let { firstname,lastname ,birthday,country,city ,phone ,username, email, password} = req.body;

    try {
      if (!firstname)
      return res.status(404).json({ error: "FirstName invalidate or undefined" });
      if (!lastname)
      return res.status(404).json({ error: "LastName invalidate or undefined" });
      if (!birthday)
      return res.status(404).json({ error: "Birthday invalidate or undefined" });
      if (!country)
      return res.status(404).json({ error: "Country invalidate or undefined" });
      if (!city)
      return res.status(404).json({ error: "City invalidate or undefined" });
      if (!phone)
      return res.status(404).json({ error: "Phone invalidate or undefined" });
  /*     if (!image)
      return res.status(404).json({ error: "Imagen invalidate or undefined" }); */
      if (!username)
      return res.status(404).json({ error: "Username invalidate or undefined" });
      if (!email)
      return res.status(404).json({ error: "emial invalidate or undefined" });
      if (!password)
      return res.status(404).json({ error: "Email invalidate or undefined" });

    next();

    } catch (error) {
      console.log({message:error.message})
    }


}

module.exports={validateUser};