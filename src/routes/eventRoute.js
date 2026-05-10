const express = require("express");
const router = express.Router();

const {createEvent,getEvents,getEventById,} = require("../controllers/eventController");
const { createEventSchema } = require("../validators/eventValidator");
const validateMiddleware = require("../Middlewares/validatorMiddleware");

const authMiddleware = require("../Middlewares/authMiddleware");
const adminMiddleware = require("../Middlewares/adminMiddleware");

// public
router.get("/", getEvents);
router.get("/:id", getEventById);

// protected
router.post("/",authMiddleware,adminMiddleware,validateMiddleware(createEventSchema),createEvent);
module.exports = router;