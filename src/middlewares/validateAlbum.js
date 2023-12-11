const validateAlbum = (req, res, next) => {
  const {title} = req.body;
  
  console.log(title.length);
  if (!title || title.length <= 3) {
    res.status(400).json("title must be defined");
  }
  else
    next();
}

module.exports = validateAlbum;