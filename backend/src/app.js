const express = require("express")
const cors = require("cors")

const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const { errorHandler } = require("./middleware/errorHandler")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/products", productRoutes)
app.use("/cart", cartRoutes)

app.use(errorHandler)

module.exports = app
