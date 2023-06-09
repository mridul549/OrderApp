const express = require('express');
const router = express.Router();

router.use('/owner', require('./owner'));
router.use('/outlet', require('./outlet'));
router.use('/user', require('./user'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/seq', require('./sequence'))
router.use('/mail', require('../mail/mailRoutes'))
router.use('/categoryicon', require('./categoryIcon'))
router.use('/category', require('./category'))

module.exports = router;