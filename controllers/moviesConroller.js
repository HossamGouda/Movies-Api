const Movie = require("../Models/movie");

exports.create = async (req, res) => {
  const {name, category, description} = req.body;
  const movie = Movie({
    name,
    category,
    description,
  });
  await movie.save();

  res.json({
    success: true,
    data: movie,
  });
};

exports.find = async (req, res) => {
  const {id} = req.params;
  const movie = await Movie.findById(id).select("-reviews");
  if (!movie) {
    return res.status(404).send();
  }
  res.json({success: true, data: movie});
};

exports.update = async (req, res) => {
  const {id} = req.params;
  const {name, category, description} = req.body;
  await Movie.updateOne(
    {_id: id},
    {
      $set: {
        name,
        category,
        description,
      },
    }
  );

  res.json({success: true});
};

exports.delete = async (req, res) => {
  const {id} = req.params;
  await Movie.deleteOne({_id: id});
  res.json({success: true});
};

exports.list = async (req, res) => {
  const page = req.query?.page || 1;
  const limit = 2;
  const skip = (page - 1) * limit;
  const movies = await Movie.find().select("-reviews").skip(skip).limit(limit);
  const total = await Movie.countDocuments();
  const pages = Math.ceil(total / limit).toFixed;
  res.json({success: true, pages, data: movies});
};
