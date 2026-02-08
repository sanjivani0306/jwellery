exports.validateCart = (req, res, next) => {
  const { productId, qty } = req.body

  if (!productId || typeof productId !== "number") {
    return res.status(400).json({ error: "Valid productId required" })
  }

  if (!qty || qty < 1) {
    return res.status(400).json({ error: "qty must be >= 1" })
  }

  next()
}
