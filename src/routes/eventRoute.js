const express = require("express");
const router = express.Router();

const {createEvent,getEvents,getEventById,} = require("../controllers/eventController");

const authMiddleware = require("../Middlewares/authMiddleware");
const adminMiddleware = require("../Middlewares/adminMiddleware");

// public
router.get("/", getEvents);
router.get("/:id", getEventById);

// protected
router.post("/",authMiddleware,adminMiddleware,createEvent);

module.exports = router;