const User = require("../Models/user");

exports.check = async (req, res, next) => {
  const user = await User.findById(req.userId);
  user.isAdmin
    ? next()
    : res.status(403).json({
        message: "Forbidden",
      });
};
