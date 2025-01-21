const express = require('express');
const authController = require('./../controllers/authController');
// const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);

// router.route('/').get(console.log('hello')).post(console.log('hello'));

// router
//   .route('/:id')
//   .get(console.log('hello'))
//   .patch(console.log('hello'))
//   .delete(console.log('hello'));

module.exports = router;
