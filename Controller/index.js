const Router = require("express").Router;

const router = Router();

const bookController = require("../Controller/bookController.js");

const services = require("../Services/services.js")

router.get("/book", bookController.readList);

router.get("/book/:id", bookController.read);

router.post("/book", bookController.create);

router.post("/login", services.autenticate);

router.post("/buy", services.buy);

module.exports = router;
