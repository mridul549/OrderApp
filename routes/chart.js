const express = require('express')
const router = express.Router()
const chartController = require('../controllers/chartController')
const checkAuth = require('../middlewares/check-auth')

router.get('/testing', chartController.testing)

router.get('/revenue/day', chartController.getRevenueByDay)
router.get('/revenue/month', chartController.getRevenueByMonth)
router.get('/revenue/year', chartController.getRevenueByYear)

router.get('/compare/day', checkAuth, chartController.compareOutletsByDay)
router.get('/compare/month', checkAuth, chartController.compareOutletsByMonth)
router.get('/compare/year', checkAuth, chartController.compareOutletsByYear)

router.get('/products/day', chartController.productCountByDay)
router.get('/products/month', chartController.productCountByMonth)
router.get('/products/year', chartController.productCountByYear)

module.exports = router