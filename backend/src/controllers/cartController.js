let cart = []

exports.addToCart = (req, res) => {
  cart.push(req.body)

  res.json({
    success: true,
    items: cart.length
  })
}
