const router = require("express").Router();

const userController = require("../controllers/userController");

const imageUpload = require("../middlewares/multer");

router.post("/login", userController.userLogin);
router.post("/signup", imageUpload.single("avatar"), userController.userSignUp);

module.exports = router;
