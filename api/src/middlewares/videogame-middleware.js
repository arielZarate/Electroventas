const validateCreate = (req, res, next) => {
  let { name, description, image, platforms, released, rating, genres } =
    req.body;

  if (!name)
    return res.status(404).json({ error: "Name invalidate or undefined" });
  if (!image)
    return res.status(404).json({ error: "Image invalidate or undefined" });
  if (!description)
    return res
      .status(404)
      .json({ error: "Description invalidate or undefined" });
  if (!platforms)
    return res.status(404).json({ error: "Platforms invalidate or undefined" });
  if (!released)
    return res.status(404).json({ error: "Released invalidate or undefined" });
  if (!rating)
    return res.status(404).json({ error: "Rating invalidate or undefined" });
  if (!genres)
    return res
      .status(404)
      .json({ error: "Genres : invalidate name or undefined" });

  next();
};

module.exports = { validateCreate };
