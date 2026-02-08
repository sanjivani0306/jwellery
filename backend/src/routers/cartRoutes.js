const router = require("express").Router()
const { addToCart } = require("../controllers/cartController")
const { validateCart } = require("../middleware/validateCart")

router.post("/", validateCart, addToCart)

module.exports = router
