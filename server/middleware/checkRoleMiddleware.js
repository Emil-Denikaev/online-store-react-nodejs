const jwt = require('jsonwebtoken')

module.exports = function(role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next()
    }
    try {
      const token = req.headers.autorization.split(' ')[1] // Bearer sofjjgfj(token)
      if (!token) {
        res.status(401).json({message: "Пользователь не авторизован"})
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY)
      if (decoded.role !== role) {
        res.status(403).json({message: "Нет доступа"})
      }
      req.user = decodednext()
    } catch  (e) {
      res.status(401).json({message: "Пользователь не авторизован"})
    }
  };
}
