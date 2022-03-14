import express from 'express'
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST Register user
// POST Login
// POST Save data user
// GET profile

export default router;
