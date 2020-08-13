const router = require('express').Router();
const { Image } = require('../db/index');

router.get('/', (req, res, next) => {
  try {
    res.json('this worked');
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    res.json(req.body);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
