const dotenv = require("dotenv")
dotenv.config()

const ImageKit = require("imagekit")
const imagekit = new ImageKit({
	publicKey: "public_QlQDWSQxyQXJKzsFURVr3+OWWA8=",
	privateKey: "private_zlX5JOE4xfvt6eYgNLGJLZguTJM=",
	urlEndpoint: "https://ik.imagekit.io/r6riwmgeb",
})

module.exports = imagekit
