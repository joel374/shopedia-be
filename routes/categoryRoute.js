const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router.get("/", categoryController.showAllCategories);
router.get("/category_detail", categoryController.getCategoryByName);

module.exports = router;
