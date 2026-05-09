const express = require("express");
const router = express.Router();

const {registerForEvent,cancelRegistration,getMyRegistrations,} = require("../controllers/registrationController");

const authMiddleware = require("../Middlewares/authMiddleware");

// register
router.post("/:id/register", authMiddleware, registerForEvent);

// cancel
router.delete("/:id/cancel", authMiddleware, cancelRegistration);

// my registrations
router.get("/me", authMiddleware, getMyRegistrations);

module.exports = router;