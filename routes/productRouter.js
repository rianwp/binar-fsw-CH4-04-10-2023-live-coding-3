const router = require("express").Router()

const Product = require("../controllers/productController")

const uploader = require("../middlewares/uploader")

router.post("/", uploader.single("image"), Product.createProduct)
router.get("/", Product.findProduct)
router.get("/:id", Product.findProductById)
router.patch("/:id", Product.updateProduct)
router.delete("/:id", Product.deleteProduct)

module.exports = router
