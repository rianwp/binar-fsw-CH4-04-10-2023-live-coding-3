const imagekit = require("../lib/imagekit")
const { Product } = require("../models")

const createProduct = async (req, res) => {
	const { name, price, stock } = req.body
	const file = req.file

	try {
		const split = file.originalName.split(".")
		const extension = split[split.length - 1]

		const img = await imagekit.upload({
			file: file.buffer,
			fileName: `IMG-${Date.now()}.${extension}`,
		})
		const newProduct = await Product.create({
			name,
			price,
			stock,
			imageUrl: img.url,
		})
		res.status(200).json({
			status: "success",
			data: {
				newProduct,
			},
		})
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const findProduct = async (req, res) => {
	try {
		const products = await Product.findAll()
		res.status(200).json({
			status: "success",
			data: {
				products,
			},
		})
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const findProductById = async (req, res) => {
	try {
		const products = await Product.findOne({
			where: { id: req.params.id },
		})
		res.status(200).json({
			status: "success",
			data: {
				products,
			},
		})
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const updateProduct = async (req, res) => {
	const { name, price, stock } = req.body
	try {
		const product = await Product.update(
			{
				name,
				price,
				stock,
			},
			{
				where: { id: req.params.id },
			}
		)
		res.status(200).json({
			status: "success",
			message: "update sukses",
		})
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const deleteProduct = async (req, res) => {
	try {
		const product = await Product.destroy({
			where: { id: req.params.id },
		})
		res.status(200).json({
			status: "success",
			message: "delete sukses",
		})
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

module.exports = {
	createProduct,
	findProduct,
	findProductById,
	updateProduct,
	deleteProduct,
}
