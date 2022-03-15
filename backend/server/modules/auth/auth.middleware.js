import jwt from 'jsonwebtoken';

export default {
  authenticateUser: (req, res, next) => {
    const headerAuth = req.headers.authorization;
    if(headerAuth) {
      const token = headerAuth.split(' ')[1];

      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) {
          res.status(403).json({message: 'Authentication failed'})
        }

        req.user = user;
        next()
      })
    } else {
      res.status(403).json({message: 'Unauthorized'})
    }
  }
}