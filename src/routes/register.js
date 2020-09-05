const express = require('express');

const controller = require('../controllers/users.controller');
const router = express.Router();

router
  .route('/')

  .get(controller.getAll)

router
  .route('/create')

  .post(controller.createUser)

router
  .route('/:id')

  .get(controller.findByID)

module.exports = router;