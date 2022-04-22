const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.autorization.split(' ')[1]
    if (!token) {
      res.status(401).json({message: "Пользователь не авторизован"})
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decodednext()
  } catch  (e) {
    res.status(401).json({message: "Пользователь не авторизован"})
  }
};